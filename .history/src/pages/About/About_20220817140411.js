import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';

function About() {
    return (
        <div className="About">
            <Router>
                <section>
                    <Routes>
                        <Route path="chinh-sach-doi-tra" element={<Products />} />
                        <Route path="about-us" element={<Details />} />
                        <Route path="chinh-sach-bao-mat" element={<Cart />} />
                        <Route path="dieu-khoan-dich-vu" element={<Cart />} />
                    </Routes>
                </section>
            </Router>
        </div>
    );
}

export default About;
