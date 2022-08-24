import React, { useContext, useState, useRef, Component } from 'react';
import { DataContext } from './DataProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sizes from './Sizes';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';
import './Details.css';

export default function Details() {
    const { id } = useParams();
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    const [index, setIndex] = useState(0);
    const imgDiv = useRef();

    const details = products.filter((product, index) => {
        return product._id === id;
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <>
            {products.map((item) => (
                <div
                    className="details"
                    key={item._id}
                    onMouseMove={handleMouseMove}
                    style={{ backgroundImage: `url(${item.images[index]})` }}
                    ref={imgDiv}
                    onMouseLeave={() => (imgDiv.current.style.backgroundPosition = `center`)}
                >
                    <img src={item.src} alt="" />
                    <div className="box">
                        <div className="row">
                            <h2>{item.title}</h2>
                            <span>{item.price}.000 VND</span>
                        </div>
                        <Colors colors={item.colors} />
                        <Sizes sizes={item.sizes} />
                        <p>{item.description}</p>
                        <p>{item.content}</p>
                        <DetailsThumb images={item.images} setIndex={setIndex} />
                        <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                            Add to cart
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
