import React from "react"
import ReactDOM from "react-dom"
//import { HashRouter as Router, Routes, Route} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/app.css"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"

ReactDOM.render(
 <React.StrictMode>
     <Router basename={process.env.PUBLIC_URL}>
         <Navbar/>
         <Routes>
                <Route exact path="/" element={<TodoContainer/>}></Route>
                <Route path="/about/*" element={<About/>}></Route>
                <Route path="*" element={<NotMatch/>}></Route>
         </Routes>
     </Router>
     
 </React.StrictMode>,
 document.getElementById("root")
)
