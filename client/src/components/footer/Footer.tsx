import styles from "./footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <ul className={styles.list}>
          <h4>Explore the World</h4>
          <li className={styles.item}>Countries</li>
          <li className={styles.item}>Regions</li>
          <li className={styles.item}>Cities</li>
          <li className={styles.item}>Districts</li>
          <li className={styles.item}>Airports</li>
          <li className={styles.item}>Hotels</li>
        </ul>
        <ul className={styles.list}>
          <h4>Find Your Perfect Stay</h4>
          <li className={styles.item}>Homes </li>
          <li className={styles.item}>Apartments </li>
          <li className={styles.item}>Resorts </li>
          <li className={styles.item}>Villas</li>
          <li className={styles.item}>Hostels</li>
          <li className={styles.item}>Guest houses</li>
        </ul>
        <ul className={styles.list}>
          <h4>Travel Inspiration</h4>
          <li className={styles.item}>Unique places to stay </li>
          <li className={styles.item}>Reviews</li>
          <li className={styles.item}>Unpacked: Travel articles </li>
          <li className={styles.item}>Travel communities </li>
        </ul>
        <ul className={styles.list}>
          <h4>Plan Your Trip</h4>
          <li className={styles.item}>Car rental </li>
          <li className={styles.item}>Flight Finder</li>
          <li className={styles.item}>Restaurant reservations </li>
          <li className={styles.item}>Travel Agents </li>
        </ul>
        <ul className={styles.list}>
          <h4>About U</h4>
          <li className={styles.item}>Curtomer Service</li>
          <li className={styles.item}>Partner Help</li>
          <li className={styles.item}>Careers</li>
          <li className={styles.item}>Sustainability</li>
          <li className={styles.item}>Press center</li>
          <li className={styles.item}>Safety Resource Center</li>
        </ul>
        <ul className={styles.list}>
          <h4>Coming soon on</h4>
          <li className={styles.item}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </li>
          <li className={styles.item}>
            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
          </li>
          <li className={styles.item}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </li>
          <li className={styles.item}>
            <FontAwesomeIcon icon={faSquareInstagram} size="2x" />{" "}
          </li>
        </ul>
      </div>
      <div className={styles.corpArea}>
        <span className={styles.addr}>
          @{new Date().getFullYear()} Simon. All right reserved.
        </span>
        <div className={styles.corpArea}>
          <ul className={styles.listCorp}>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
