import React from "react";
import styles from "./header.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <div>
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
      </div>

      <nav className={mobileMenu ? styles.navMenu : styles.inactiveNavMenu}>
        <ul>
          <li>
            <a href="www.google.com">início</a>
          </li>
          <li>
            <a href="www.google.com">hemocentros</a>
          </li>
          <li>
            <a href="www.google.com">etapas</a>
          </li>
          <li>
            <a href="www.google.com">por que doar?</a>
          </li>
          <li>
            <a href="www.google.com">pré cuidados</a>
          </li>
          <li>
            <a href="www.google.com">teste de elegibilidade</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
