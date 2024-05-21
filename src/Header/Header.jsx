import PropTypes from "prop-types"
import "./Header.module.css"

function Header() {
    const navigation = [{id: "home", name: "Home", lead: "#home",},
                        {id: "services", name: "Services", lead: "#services",}, 
                        {id: "schedules", name: "Schedules", lead: "#schedules"}, 
                        {id: "location", name: "Location", lead: "#location"}, 
                        {id: "about", name: "About", lead: "#about"}, 
                        {id: "contact", name: "Contact", lead: "#contact"}];
    

    const navItems = navigation.map(navItem => <li key={navItem.id}><a key={navItem.id} href={navItem.lead}>{navItem.name}</a></li>)
    return (
        <header>
            <a href="/"><h1>Smart Kids Daycare</h1></a>
            <nav>
                <ul>{navItems}</ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    page: PropTypes.string
}

export default Header