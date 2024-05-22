import PropTypes from "prop-types"
import "./Header.module.css"

function Header() {
    const navigation = [{id: "home", name: "Home"},
                        {id: "services", name: "Services"}, 
                        {id: "schedule", name: "Schedule"}, 
                        {id: "location", name: "Location"}, 
                        {id: "about", name: "About"}, 
                        {id: "contact", name: "Contact"}];
    

    const navItems = navigation.map(navItem => <li key={navItem.id}><a key={navItem.id} href={"#" + navItem.id}>{navItem.name}</a></li>)
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