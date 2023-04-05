import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Skills from "./components/Skills"

function App() {

  return (
    <div className=" container">
      <Header/>
      <Home />
      <Skills/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes> */}
     
    </div>
  )
}

export default App
