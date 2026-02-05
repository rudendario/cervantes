export default function Footer () {

    const currentYear = () => new Date().getFullYear()

    return (
        <footer>
        <small>&copy; {currentYear()} Hostel & LivingRoom C17. Todos los derechos reservados.</small>
        </footer>
    )
}
