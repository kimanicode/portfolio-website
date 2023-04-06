import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Skills from "./components/Skills"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {

  return (
    <div className=" container">
      <Header/>
      <Home />
      <Skills/>
      <ContactUs />
      <Footer/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes> */}
     
    </div>
  )
}

export default App
