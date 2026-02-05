import { Link } from "./Link";

export function Header () {
  return (
    <header>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <h1 style={{ color: 'white' }}>
            Hostel & LivingRoom C17
        </h1>
      </Link>

      <nav>
        <Link href="/search">Empleos</Link>

        <a href='/search'>Sin SPA</a>
      </nav>

    </header>
  )
}