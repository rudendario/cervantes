import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const navLinkClass = ({ isActive }) =>
  isActive
    ? `${styles.activeLink}`
    : `${styles.link}`;

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>HOSTAL CERVANTES 17</h1>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={navLinkClass}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/habitaciones" className={navLinkClass}>
              Habitaciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={navLinkClass}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
