function Header() {
    const navigation = [{id: 1, name: "Home", lead: "/"}, {id: 2, name: "Services", lead: "/"}, {id: 3, name: "Schedules", lead: "/"}, {id: 4, name: "Location", lead: "/"}, {id: 5, name: "Login", lead: "/"}, {id: 6, name: "Register", lead: "/"}];
    const navItems = navigation.map(navItem => <li key={navItem.id}><a href={navItem.lead}>{navItem.name}</a></li>)
    return (
        <header>
            <a href="/"><h1>Smart Kids Daycare</h1></a>
            <nav>
                <ul>{navItems}</ul>
            </nav>
        </header>
    );
}

export default Header