import PropTypes from "prop-types"
import styles from "./Service.module.css"

const yap = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et autem voluptatibus nobis officiis voluptatem, in rem optio non molestiae ratione nam minima modi, fugit repellat qui, voluptate error. Placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officia autem. Vitae esse repellendus nihil itaque quisquam nulla pariatur commodi aliquid, id ullam tempora. Quasi tempora incidunt modi voluptate necessitatibus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptatibus corporis autem eveniet porro excepturi adipisci deserunt tempora exercitationem nostrum, soluta, impedit doloribus beatae explicabo amet ex, blanditiis fugit minima! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto est expedita laudantium. Deleniti repellendus fugiat quos in iusto quam. Praesentium dolorum at, voluptatibus necessitatibus magnam eaque possimus esse incidunt quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, mollitia atque porro veniam odit, nihil in deserunt laborum aliquam praesentium culpa impedit natus. Accusantium excepturi similique unde ad hic eligendi.";

function Service(props) {

    const expand = () =>
    {
        if (document.getElementById(props.service.id).children[3].children[0].textContent == "Learn More")
        {
            document.getElementById(props.service.id).style.width = "90%"
            document.getElementById(props.service.id).children[2].textContent = yap;
            document.getElementById(props.service.id).children[3].children[0].textContent = "Close"
        }
        else
        {
            document.getElementById(props.service.id).style.width = "400px"
            document.getElementById(props.service.id).children[2].textContent = props.service.description;
            document.getElementById(props.service.id).children[3].children[0].textContent = "Learn More"
        }
        
    }

    return(
            <div className={styles.card} id={props.service.id}>
                <img src={props.service.imageURL} alt="service picture" className={styles.cardImage}></img>
                <h2 className={styles.cardTitle}>{props.service.title}</h2>
                <p className={styles.cardDescription}>{props.service.description}</p>
                <a href={"#" + props.service.id}><button className={styles.learnMore} onClick={expand}>Learn More</button></a>
            </div>
    );
}

Service.propTypes = {
    service: PropTypes.object
}
export default Service