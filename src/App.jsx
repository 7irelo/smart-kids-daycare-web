import Header from "./Header.jsx"
import Service from "./Service/Service.jsx"
import Footer from "./Footer.jsx"

function App() {
  const services = ["After School Child Care", "Child Watch", "Preschool", "Special Needs Care", "Daycare"]
  return(
    <>
      <Header/>
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
