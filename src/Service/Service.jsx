import PropTypes from "prop-types"
import styles from "./Service.module.css"

function Service(props) {

    return(
            <div className={styles.card}>
                <img src={props.service.imageURL} alt="service picture" className={styles.cardImage}></img>
                <h2 className={styles.cardTitle}>{props.service.title}</h2>
                <p className={styles.cardDescription}>{props.service.description}</p>
                <button className={styles.learnMore}>Learn More</button>
            </div>
    );
}

Service.propTypes = {
    service: PropTypes.object
}
export default Service