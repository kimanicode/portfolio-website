import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from "./components/Skills"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {

  return (
  <Router>
    <div className=" container">
      <Header/>
      <Home />
      <Skills/>
      <Projects/>
      <ContactUs />
      <Footer/>
     
      {/* <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes> */}
     
    </div>
    </Router>
  )
}

export default App
