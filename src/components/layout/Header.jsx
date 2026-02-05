import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-primary font-semibold"
    : "text-gray-700 hover:text-primary";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Hostal Sol</h1>

        <ul className="flex gap-6">
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
