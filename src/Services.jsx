import service_pic from "./assets/astronaut.jpg"

function Services() {
    const services = ["Nurturing", "Reading and writing", "Listening comprehension", "Breakfast and Lunch", "Daycare"]
    return(
        <div className="container">
            <div className="card">
                <img src={service_pic} alt="service picture"></img>
                <h2>{services[0]}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture"></img>
                <h2>{services[1]}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
            </div>
            <div className="card">
                <img src={service_pic} alt="service picture"></img>
                <h2>{services[2]}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos.</p>
            </div>
        </div>
    );
}

export default Services