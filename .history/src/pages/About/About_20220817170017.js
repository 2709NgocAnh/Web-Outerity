import React from 'react';

import Introduce from './components/Introduce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Details from './components/Details';
import Cart from './components/Cart';

function About() {
    return (
        <div className="About">
            <Router>
                <section>
                    <Routes>
                        <Route path="about-us" element={<Introduce />} />
                        <Route path="chinh-sach-doi-tra" element={<Products />} />
                        <Route path="chinh-sach-bao-mat" element={<Cart />} />
                        <Route path="dieu-khoan-dich-vu" element={<Cart />} />
                    </Routes>
                </section>
            </Router>
        </div>
    );
}

export default About;
