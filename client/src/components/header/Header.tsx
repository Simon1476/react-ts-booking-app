import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useAppSelector } from "../../typedHooks/hooks";
import { faAddressCard, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={styles.logo}>SPOTON</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className={styles.items}>
            <div className={styles.actionItem}>
              <FontAwesomeIcon icon={faAddressCard} size="1x" />
              <button className={styles.button}>Register</button>
            </div>
            <div className={styles.actionItem}>
              <FontAwesomeIcon icon={faUserCheck} size="1x" />
              <button className={styles.button}>Login</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
