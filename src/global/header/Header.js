import React from "react";
import styles from "./header.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
            <Link to="/" onClick={() => setMobileMenu(false)}>
              início
            </Link>
          </li>
          <li>
            <Link to="hemocentros" onClick={() => setMobileMenu(false)}>
              hemocentros
            </Link>
          </li>
          <li>
            <Link href="www.google.com" onClick={() => setMobileMenu(false)}>
              etapas
            </Link>
          </li>
          <li>
            <Link href="www.google.com" onClick={() => setMobileMenu(false)}>
              por que doar?
            </Link>
          </li>
          <li>
            <Link href="www.google.com" onClick={() => setMobileMenu(false)}>
              pré cuidados
            </Link>
          </li>
          <li>
            <Link href="www.google.com" onClick={() => setMobileMenu(false)}>
              teste de elegibilidade
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
