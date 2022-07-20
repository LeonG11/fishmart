import {useMediaQuery} from "react-responsive";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Top from "./Contents/Top";
import Body from "./Contents/Body";
import FishFish from "./Contents/FishFish";
import Menu from "./Contents/Menu";
import About from "./Contents/About";
import Auth from "./Contents/Auth";
import React from 'react'


function App() {
    const isDesktop = useMediaQuery({
        query: "(min-width:1224px)"
    });
    const isTablet = useMediaQuery({
        query: "(max-width:1224px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });
    const isPortrait = useMediaQuery({
        query: "(orientation:portrait)"
    });

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