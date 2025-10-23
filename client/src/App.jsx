import {Route, Routes} from "react-router-dom"
import './global.css'

import HomeLayout from "./layouts/homeLayout"

import Home from "./components/home"
import About from "./components/About/About"
import Code from "./components/Code/Code"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home />}/>
        <Route path="/code" element={<Code />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
