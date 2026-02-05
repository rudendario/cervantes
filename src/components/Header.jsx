import { Link } from "./Link";

export function Header () {
  return (
    <header>
      <header class="sticky-nav bg-white/90 dark:bg-background-dark/90 border-b border-[#e6e3db] dark:border-white/10 px-6 lg:px-20">
<div class="max-w-7xl mx-auto flex items-center justify-between h-20">
<div class="flex items-center gap-2">
<div class="text-primary">
<span class="material-symbols-outlined text-4xl">apartment</span>
</div>
<h2 class="text-[#181611] dark:text-white text-2xl font-extrabold tracking-tight">C17</h2>
</div>
<nav class="hidden md:flex items-center gap-10">
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#habitaciones">Habitaciones</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#servicios">Servicios</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#ubicacion">Ubicación</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#contacto">Contacto</a>
</nav>
<div class="flex items-center gap-4">
<button class="bg-primary hover:bg-primary/90 text-[#181611] px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                Reservar Ahora
            </button>
</div>
</div>
</header>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <h1 style={{ color: 'white' }}>
            Hostel & LivingRoom C17
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