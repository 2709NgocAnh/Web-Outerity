import React, { Component } from 'react';
import { DataContext } from './DataProvider';
import { Link } from 'react-router-dom';
import Sizes from './Sizes';
import Colors from './Colors';
import './Details.css';

export default function Details() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    
    const [index, setIndex] = useState(0)
    const imgDiv = useRef();


    const details = products.filter((product, index) =>{
        return product._id === id
    })

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }


        return (
            <>
                {product.map((item) => (
                    <div className="details" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>{item.price}.000 VND</span>
                            </div>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        );
    }}

