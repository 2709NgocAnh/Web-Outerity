import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();
export const DataProvider = (props) => {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [numcart, setNumcart] = useState(0);

    useEffect(() => {
        const num = cart.reduce((total, val) => total + val.num, 0);
        setNumcart(num);
    }, [cart]);

    const addCart = (product, num) => {
        const prdIndex = cart.findIndex((val) => val.id === product.id);
        if (prdIndex === -1) {
            setCart([...cart, { ...product, cartNum: num }]);
        } else {
            const newCart = [...cart];
            newCart[prdIndex].cartNum += num;
            setCart(newCart);
        }
        alert('Sản phẩm đã được thêm vào giỏ hàng');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const value = {
        cart: [cart, setCart],
        numcart: [numcart, setNumcart],
        addCart: addCart,
    };

    return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
