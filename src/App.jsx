import Header from "./Header.jsx"
import Home from "./Home.jsx"
import Service from "./Service/Service.jsx"
import Footer from "./Footer.jsx"

function App() {
  const ASCC = {
    id: 1,
    imageURL: "../src/assets/children.jpg",
    title: "After School Child Care",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
  }
  const CW = {
    id: 2,
    imageURL: "../src/assets/grandmother.jpg",
    title: "Child Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
  }
  const P = {
    id: 3,
    imageURL: "../src/assets/children_colouring.jpg",
    title: "Preschool",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
  }
  const SNC = {
    id: 4,
    imageURL: "../src/assets/teacher_painting.jpg",
    title: "Special Needs Care",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
  }
  const D = {
    id: 5,
    imageURL: "../src/assets/swing.jpg",
    title: "Daycare",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
  }

  const services = [ASCC, CW, P, SNC, D]
  return(
    <>
      <Header/>
      <Home loggedIn={false}/>
      <div className="container">
        <h1>Services</h1>
        <Service service={services[0]}/>
        <Service service={services[1]}/>
        <Service service={services[2]}/>
        <Service service={services[3]}/>
        <Service service={services[4]}/>
      </div>
      <Footer/>
    </>
  );
}

export default App
