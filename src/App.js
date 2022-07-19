import React from "react";
import Top from "./Contents/Top";
import Body from "./Contents/Body.jsx";
import Menu from "./Contents/Menu";
import About from "./Contents/About";
import Auth from "./Contents/Auth"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./index.css";
import "animate.css";
import FishFish from "./Contents/FishFish";

function App() {
  return (
    <Router>
        <Top/>
        <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/fishfish" element={<FishFish/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contents" element={<About/>}/>
            <Route path='/auth' element={<Auth/>}/>
        </Routes>
    </Router>
  );
}

export default App;
