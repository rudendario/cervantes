export function Footer () {
  return (
    <footer>
      <small>&copy; {currentYear()} C17. Todos los derechos reservados.</small>
    </footer>
  )
}
function currentYear() {
  return new Date().getFullYear()
}