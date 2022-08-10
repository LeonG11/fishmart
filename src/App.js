import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Top from "./Contents/Top";
import Body from "./Contents/Body";
import FishFish from "./Contents/FishFish";
import Shop from "./Contents/Shop";
import About from "./Contents/About";
import Auth from "./Contents/Auth";

function App() {
  return (
    /* Use React-router-dom, function BrowserRouter used with spread operator in Router, Routes and Route */
    <Router>
      <Top />
      <Routes>
        <Route path="/" element={<Body />} /> {/* main page */}
        <Route path="/fishfish" element={<FishFish />} /> {/* about page */}
        <Route path="/menu" element={<Shop />} /> {/* shop page */}
        <Route path="/about" element={<About />} /> {/* contact page */}
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
