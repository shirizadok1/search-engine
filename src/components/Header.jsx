import React from "react";
import NavbarComponent from "./NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';

function Header() {
    return (
        <header>
            <NavbarComponent />
                <Router>
                        <Routes>
                            {/* <Route exact path="/" element={<Home />} /> */}
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/contact" element={<Contact />} />
                            {/* <Route path="*" element={<NotFound />} /> */}
                        </Routes>
                </Router>
        </header>
    );
}

export default Header;
