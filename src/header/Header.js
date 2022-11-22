import React from "react";
import "./header.css";
import styles from "./header.module.css";

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(max-width: 800px)").matches) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <button
          className={styles.toggleMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span
            className={
              mobileMenu
                ? `${styles.hamburger} ${styles.closeMenu}`
                : styles.hamburger
            }
          ></span>
        </button>
      </div>

      <nav className={mobileMenu ? styles.navMenu : styles.inactiveNavMenu}>
        <ul>
          <li>
            <a href="#">início</a>
          </li>
          <li>
            <a href="#">hemocentros</a>
          </li>
          <li>
            <a href="#">etapas</a>
          </li>
          <li>
            <a href="#">por que doar?</a>
          </li>
          <li>
            <a href="#">teste de elegibilidade</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
