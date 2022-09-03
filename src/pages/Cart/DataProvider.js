import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        /* if (check) {
            const data = products.filter((product) => {
                return product._id === id;
            });
            setCart([...cart, ...data]);
        } else {
            alert('The product has been added to cart.');
        } */
        alert('The product has been added to cart.');
    };

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart) setCart(dataCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);

    const value = {
        //collects: [collects, setCollects],
        // products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
    };

    return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
