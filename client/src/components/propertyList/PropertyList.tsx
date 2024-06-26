import { useQuery } from "@tanstack/react-query";
import { fetchHotelCountByType } from "../../hooks/hotelApis";
import styles from "./propertyList.module.css";

const PropertyList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotelsByType"],
    queryFn: () => fetchHotelCountByType("/hotels/countByType"),
  });
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  let content;

  if (isPending) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p>Error occur!</p>;
  }

  if (data) {
    content = (
      <div className={styles.pList}>
        {images.map((img, i) => (
          <div className={styles.item} key={i}>
            <img className={styles.img} src={img} alt="" />
            <div className={styles.titles}>
              <h1>{data[i]?.type}</h1>
              <h2>
                {data[i]?.count} {data[i]?.type}
              </h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <header>
        <h2>Browse by property type</h2>
      </header>
      {content}
    </div>
  );
};

export default PropertyList;
