import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import type { Range } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

interface Options {
  adult: number;
  children: number;
  room: number;
}

interface NavbarProps {
  type?: string;
}
const Navbar = ({ type }: NavbarProps) => {
  const [destination, setDestination] = useState<string>("");
  const [openDate, setOpenDate] = useState<boolean>(false);

  const [date, setDate] = useState<Range[] | undefined>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name: keyof Options, operation: string): void => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const formattedStartDate = date?.[0].startDate
    ? format(date[0].startDate, "dd.MM.yyyy")
    : "";
  const formattedEndDate = date?.[0].endDate
    ? format(date[0].endDate, "dd.MM.yyyy")
    : "";

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={`${styles.listItem}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={styles.listItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={styles.listItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className={styles.listItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className={styles.listItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className={styles.title}>
              The quality of life! just enjoy for yourself.
            </h1>
            <p className={styles.desc}>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className={styles.button}>Sign in / Register</button>

            <div className={styles.search}>
              <div className={styles.searchItem}>
                <span>🏛️</span>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className={styles.searchInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDestination(e.target.value)
                  }
                />
              </div>
              <div className={styles.searchItem}>
                <span>🗓️</span>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className={styles.searchText}
                >{` ${formattedStartDate} to ${formattedEndDate}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className={styles.date}
                  />
                )}
              </div>
              <div className={styles.searchItem}>
                <span>🏛️</span>
                <span onClick={() => setOpenOptions(!openOptions)}>
                  1 adult 0 children 1 room
                </span>
                {openOptions && (
                  <div className={styles.options}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Adult</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNum}>
                          {options.adult}
                        </span>
                        <button
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Children</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.children <= 1}
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("children", "decrease")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNum}>
                          {options.children}
                        </span>
                        <button
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Room</span>
                      <div className={styles.optionCounter}>
                        <button
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("room", "decrease")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNum}>
                          {options.room}
                        </span>
                        <button
                          className={styles.optionCounterBtn}
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.searchItem}>
                <button className={styles.button} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
