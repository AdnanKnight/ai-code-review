import {Route, Routes} from "react-router-dom"
import './global.css'

import HomeLayout from "./layouts/homeLayout"

import Home from "./components/home"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
