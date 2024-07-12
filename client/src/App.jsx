import Header from "./Header/Header.jsx"
import Home from "./Home/Home.jsx"
import Service from "./Service/Service.jsx"
import Schedule from "./Schedule/Schedule.jsx"
import About from "./About/About.jsx"
import Contact from "./Contact/Contact.jsx"
import Footer from "./Footer/Footer.jsx"

function App() {

  const services = [
    {
          id: "after_school_child_care",
          imageURL: "../src/assets/children.jpg",
          title: "After School Child Care",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo nostrum temporibus natus provident exercitationem eligendi laudantium veniam, quaerat tempore expedita quisquam deleniti blanditiis excepturi. Exercitationem voluptatum nemo aliquid nisi!"
    }, {
          id: "child_watch",
          imageURL: "../src/assets/grandmother.jpg",
          title: "Child Watch",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni explicabo atque mollitia veritatis obcaecati quasi perferendis, commodi aliquid cupiditate sint adipisci pariatur, culpa sunt, architecto omnis libero amet dignissimos."
    }, {
          id: "preschool",
          imageURL: "../src/assets/children_colouring.jpg",
          title: "Preschool",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsa ipsam rem odio laboriosam quos hic doloribus aperiam debitis enim, fuga nihil necessitatibus nostrum quas? Magni tempora temporibus minima beatae?"
    }, {
          id: "special_needs_care",
          imageURL: "../src/assets/teacher_painting.jpg",
          title: "Special Needs Care",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga odio voluptate exercitationem, quibusdam rerum ducimus alias nam illum inventore quisquam reiciendis, distinctio quasi explicabo laborum cumque. Voluptatum, animi praesentium."
    }, {
          id: "daycare",
          imageURL: "../src/assets/swing.jpg",
          title: "Daycare",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus placeat repellendus assumenda consequatur saepe eum quod architecto cupiditate mollitia temporibus, quia quisquam neque. Officia iusto voluptates omnis quo minima?"
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
      <section id="schedule">
        <h1>Schedule</h1>
        <Schedule/>
      </section>
      <section id="location">
        <h1>Location</h1>
      </section>
      <section id="about">
        <h1>About</h1>
        <About/>
      </section>
      <section id="contact">
        <h1>Contact Us</h1>
        <Contact/>
      </section>
      <Footer/>
    </>
  );
}

export default App
