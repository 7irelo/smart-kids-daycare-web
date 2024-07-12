import styles from "./Home.module.css"

function Home() {

    const image = {
        width: "700px",
        borderRadius: "10px",
        border: "10px groove hsl(0, 0%, 100%)",
        boxShadow: "5px 5px 5px hsl(0, 0%, 0%, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    }

    // return(props.loggedIn ? <h1 style={styles}>Welcome</h1> : <h1 style={styles}>Login</h1>)
    return(
        <div className={styles.homeContainer}>
            <p className={styles.homeDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque accusantium numquam maxime earum? Quas voluptas commodi optio! Illum minus voluptas dignissimos perspiciatis sunt eveniet, recusandae vel maxime mollitia, consectetur ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.<br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ducimus officia totam nihil sunt perferendis dignissimos autem suscipit vel earum mollitia ex iusto minus, rem culpa unde quas labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.<br></br><br></br>
            </p>
            <img src="./src/assets/girls.jpg" style={image}></img>
        </div>
    )
}

export default Home