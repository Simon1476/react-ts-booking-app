import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styles from "./list.module.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelData } from "../../hooks/hotelApis";

interface LocationState {
  state: {
    dates: [{ startDate?: Date; endDate?: Date; key?: string }];
    destination: string;
    options: {
      adult: number;
      children: number;
      room: number;
    };
  };
}

const List = () => {
  const location = useLocation() as LocationState;

  const [destination, setDestination] = useState(location.state?.destination);
  const [dates, setDates] = useState(location.state?.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);
  const [min, setMin] = useState<string | undefined>(undefined);
  const [max, setMax] = useState<string | undefined>(undefined);

  const formattedStartDate = dates?.[0]?.startDate
    ? format(dates[0].startDate, "dd.MM.yyyy")
    : "";
  const formattedEndDate = dates?.[0]?.endDate
    ? format(dates[0].endDate, "dd.MM.yyyy")
    : "";

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["hotelsByDestination"],
    queryFn: () =>
      fetchHotelData(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
      ),
  });

  const handleClik = () => {
    refetch();
  };

  let content;

  if (isPending) {
    content = <p>Loading please wait</p>;
  }

  if (isError) {
    content = "Error Occur!";
  }

  if (data) {
    content = data.map((item) => <SearchItem item={item} key={item._id} />);
  }
  return (
    <div className={styles.list}>
      <Navbar type="list" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <h1 className={styles.title}>Search</h1>
            <div className={styles.searchItem}>
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={styles.searchItem}>
              <label htmlFor="">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
              >{`${formattedStartDate} to ${formattedEndDate}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className={styles.searchItem}>
              <label htmlFor="">Options</label>
              <div className={styles.options}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className={styles.optionInput}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className={styles.optionInput}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Adult</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.adult}`}
                    min={1}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Children</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.children}`}
                    min={1}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Room</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.room}`}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClik}>Search</button>
          </div>
          <div className={styles.result}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default List;
