import styles from "./Schedule.module.css"

function Schedule()
{
    
    return(
        <div className={styles.schedule}>
            <p className={styles.time}>Monday       <br></br>6am =&gt; 5pm</p>
            <p className={styles.time}>Tuesday      <br></br>6am =&gt; 5pm</p>
            <p className={styles.time}>Wednesday    <br></br>6am =&gt; 5pm</p>
            <p className={styles.time}>Thursday     <br></br>6am =&gt; 5pm</p>
            <p className={styles.time}>Friday       <br></br>6am =&gt; 4pm</p>
        </div>
    )
}

export default Schedule