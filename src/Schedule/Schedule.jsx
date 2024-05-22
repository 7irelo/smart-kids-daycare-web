import styles from "./Schedule.module.css"

function Schedule()
{
    
    return(
        <div className={styles.schedule}>
            <p className={styles.time}><h2>Monday</h2>6am - 5pm</p>
            <p className={styles.time}><h2>Tuesday</h2>6am - 5pm</p>
            <p className={styles.time}><h2>Wednesday</h2>6am - 5pm</p>
            <p className={styles.time}><h2>Thursday</h2>6am - 5pm</p>
            <p className={styles.time}><h2>Friday</h2>6am - 4pm</p>
        </div>
    )
}

export default Schedule