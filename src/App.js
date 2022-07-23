import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Top from "./Contents/Top";
import Body from "./Contents/Body";
import FishFish from "./Contents/FishFish";
import Shop from "./Contents/Shop";
import About from "./Contents/About";
import Auth from "./Contents/Auth";
import React from 'react'

function App() {
    return (
        <Router>
            <Top/>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/fishfish" element={<FishFish/>}/>
                <Route path="/menu" element={<Shop/>}/>
                <Route path="/contents" element={<About/>}/>
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </Router>
    );
}

export default App;