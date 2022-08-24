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
                <Header />

                <section>
                    <Routes>
                        <Route path="products" element={<Products />} />
                        <Route path="products/:id" element={<Details />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </section>
            </Router>
        </div>
    );
}

export default About;
