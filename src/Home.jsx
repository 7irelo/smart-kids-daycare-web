function Home() {

    const image = {
        maxWidth: "700px",
        borderRadius: "10%",
    }

    // return(props.loggedIn ? <h1 style={styles}>Welcome</h1> : <h1 style={styles}>Login</h1>)
    return(
        <div className="home-container">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
            <img src="./src/assets/girls.jpg" style={image}></img>
        </div>
    )
}

export default Home