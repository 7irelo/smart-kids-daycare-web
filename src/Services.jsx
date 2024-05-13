import service_pic from "./assets/astronaut.jpg"

function Services() {
    const services = ["After School Child Care", "Child Watch", "Preschool", "Special Needs Care", "Daycare"]
    return(
        <div className="container">
            <h1>Services</h1>
            <div className="card">
                <img src={service_pic} alt="service picture" className="card-image"></img>
                <h2 className="card-title">{services[0]}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture" className="card-image"></img>
                <h2 className="card-title">{services[1]}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture" className="card-image"></img>
                <h2 className="card-title">{services[2]}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture" className="card-image"></img>
                <h2 className="card-title">{services[3]}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className="learn-more">Learn More</button>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture" className="card-image"></img>
                <h2 className="card-title">{services[4]}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
    );
}

export default Services