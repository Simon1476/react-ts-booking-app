import styles from "./reserve.module.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchHotelRooms } from "../../hooks/hotelApis";
import { useAppSelector } from "../../typedHooks/hooks";
import { getDateInMilliseconds } from "../../utils/helpers";

type RoomNumber = {
  unavailableDates: Date[];
};

const Reserve = ({
  onClose,
  hotelId,
}: {
  onClose: () => void;
  hotelId?: string;
}) => {
  const [selectdRooms, setSelectdRooms] = useState<string[]>([]);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotelRooms", hotelId],
    queryFn: () => fetchHotelRooms(`/hotels/room/${hotelId}`),
  });
  const { dates } = useAppSelector((state) => state.search);
  const navigate = useNavigate();

  const getDatesInRange = (startDate: string, endDate: string) => {
    // const start = getDateInMilliseconds(start)
    const end = getDateInMilliseconds(endDate);

    const start = getDateInMilliseconds(startDate);

    const oneDay = 24 * 60 * 60 * 1000;

    const dates = [];

    // start부터 end까지 하루 간격으로 밀리초 값을 배열에 추가합니다.
    for (let i = start; i <= end; i += oneDay) {
      dates.push(i);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber: RoomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectdRooms(
      selected
        ? [...selectdRooms, value]
        : selectdRooms.filter((item) => item !== value)
    );
  };

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectdRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:8800/api/rooms/availability/${roomId}`,
            {
              dates: allDates,
            }
          );
        })
      );
      onClose();
      navigate("/");
    } catch (error) {
      // handle errors
    }
  };

  let content;

  if (isPending) {
    content = "Loading...";
  }

  if (isError) {
    content = "Error Occur!";
  }

  if (data) {
    content = data.map((item) => (
      <div className={styles.item}>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.desc}>{item.desc}</div>
          <div className={styles.max}>
            Max People: <b>{item.maxPeople}</b>
          </div>
          <div className={styles.price}>{item.price}</div>
        </div>
        <div className={styles.selectRooms}>
          {item.roomNumbers.map((roomNumber) => (
            <div className={styles.room}>
              <label>{roomNumber.number}</label>
              <input
                type="checkbox"
                value={roomNumber._id}
                onChange={handleSelect}
                disabled={!isAvailable(roomNumber)}
              />
            </div>
          ))}
        </div>
      </div>
    ));
  }

  return (
    <div className={styles.reserve}>
      <div className={styles.container}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.close}
          onClick={() => onClose()}
        />
        <span>Select your rooms</span>
        {content}
        <button onClick={handleReserve} className={styles.button}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
