export function Footer () {

    function currentYear() {
        return new Date().getFullYear()
    }

    return (
        <footer>
        <small>&copy; {currentYear()} Hostel & LivingRoom C17. Todos los derechos reservados.</small>
        </footer>
    )
}
