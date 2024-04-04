import styles from "./header.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../typedHooks/hooks";

import { faAddressCard, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { persistor } from "../../store";
import { useState } from "react";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = async () => {
    await persistor.purge();
    navigate("/");
  };

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={styles.logo}>SPOTON</span>
        </Link>
        {user ? (
          <div className={styles.userMenu}>
            <button onClick={handleDropDown} className={styles.userButton}>
              {user.username}
            </button>
            {isDropdownOpen && (
              <div className={styles.userDropdown}>
                <div className={styles.logout} onClick={handleLogout}>
                  Logout
                </div>
                <div className={styles.myPage}>My page</div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.items}>
            <div className={styles.actionItem}>
              <FontAwesomeIcon icon={faAddressCard} size="1x" />
              <button className={styles.button}>Register</button>
            </div>
            <div className={styles.actionItem}>
              <FontAwesomeIcon icon={faUserCheck} size="1x" />
              <Link to="/login">
                <button className={styles.button}>Login</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
