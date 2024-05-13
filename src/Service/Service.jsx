import service_pic from "../assets/astronaut.jpg"
import styles from "./Service.module.css"

function Service(props) {
    return(
            <div className={styles.card}>
                <img src={service_pic} alt="service picture" className={styles.cardImage}></img>
                <h2 className={styles.cardTitle}>{props.service}</h2>
                <p className={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className={styles.learnMore}>Learn More</button>
            </div>
    );
}

export default Service