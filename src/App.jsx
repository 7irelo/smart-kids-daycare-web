import Header from "./Header/Header.jsx"
import Home from "./Home/Home.jsx"
import Service from "./Service/Service.jsx"
import Schedule from "./Schedule/Schedule.jsx"
import Footer from "./Footer/Footer.jsx"

function App() {

  const services = [
    {
          id: "after_school_child_care",
          imageURL: "../src/assets/children.jpg",
          title: "After School Child Care",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }, {
          id: "child_watch",
          imageURL: "../src/assets/grandmother.jpg",
          title: "Child Watch",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }, {
          id: "preschool",
          imageURL: "../src/assets/children_colouring.jpg",
          title: "Preschool",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }, {
          id: "special_needs_care",
          imageURL: "../src/assets/teacher_painting.jpg",
          title: "Special Needs Care",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }, {
          id: "daycare",
          imageURL: "../src/assets/swing.jpg",
          title: "Daycare",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }
  ]

  return(
    <>
      <Header/>
      <section id="home">
        <h1>Home</h1>
       <Home/> 
      </section>
      <section id="services">
        <h1>Services</h1>
        <Service service={services[0]}/>
        <Service service={services[1]}/>
        <Service service={services[2]}/>
        <Service service={services[3]}/>
        <Service service={services[4]}/>
      </section>
      <section id="schedules">
        <h1>Schedules</h1>
        <Schedule/>
      </section>
      <section id="location">
        <h1>Location</h1>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
      <section id="contact">
        <h1>Contact Us</h1>
      </section>
      <Footer/>
    </>
  );
}

export default App
