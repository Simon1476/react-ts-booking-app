import { useQuery } from "@tanstack/react-query";
import { fetchHotelData } from "../../hooks/hotelApis";
import styles from "./featuredProperties.module.css";

const FeaturedProperties = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotelsByPriceRange"],
    queryFn: () => fetchHotelData("/hotels?featured=true&limit=5"),
  });
  console.log(data);
  let content;

  if (isPending) {
    content = "Loading...";
  }

  if (isError) {
    content = "Error Occur!";
  }
  if (data) {
    content = data.map((item) => (
      <div className={styles.item} key={item._id}>
        <img src={item.photos?.[0]} alt="" className={styles.img} />
        <span className={styles.name}>{item.name}</span>
        <span className={styles.city}>{item.city}</span>
        <span className={styles.price}>
          Starting from ${item.cheapestPrice}
        </span>
        {item.rating && (
          <div className={styles.rating}>
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>
        )}
      </div>
    ));
  }
  return (
    <div style={{ width: "1024px" }}>
      <header>
        <h2>Homes guests love</h2>
      </header>
      <div className={styles.fp}>{content}</div>
    </div>
  );
};

export default FeaturedProperties;
