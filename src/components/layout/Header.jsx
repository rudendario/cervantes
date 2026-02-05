import { Link } from "../Link";

export function Header () {
  return (
    <header>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <img src="public/logo.png" alt="Logo del Hostal Cervantes 17" />
        <h1 style={{ color: 'white' }}>
            HOSTAL CERVANTES 17 
        </h1>
      </Link>

      <nav>
        <Link href='/habitaciones' style={{ textDecoration: 'none', marginRight: '1rem' }}>
          Pepito
        </Link>
      </nav>

    </header>
  )
}