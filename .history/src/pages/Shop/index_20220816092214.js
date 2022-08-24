import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
// import { data } from '~/pages/Shop/data';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '~/Components/Layout/component/Header/Context';
import config from '~/Components/config';

// function Shop() {
//     const cx = classNames.bind(styles);
export class Shop extends Component {
    static contextType = DataContext;

    render() {
        const cx = classNames.bind(styles);
        const { products, addCart } = this.context;
        return (
            <>
                <div className={cx('header')}>
                    <button className={cx('header-btn')}>Shop</button>
                </div>
                <div className={cx('header-title')}>BEST SELLER</div>
                <div>
                    <section className={cx('product')}>
                        <div className={cx('container')}>
                            <div className={cx('row')}>
                                {products.map((product) => {
                                    return (
                                        <div
                                            className={cx('col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item card')}
                                            key={product._id}
                                        >
                                            {/* <NavLink
                                                className={(nav) => cx('no-product-btn', { active: nav.isActive })}
                                                to={config.routes.details}
                                            >
                                                <img src={product.src} alt="" className={cx('card-img')} />
                                            </NavLink> */}
                                            <Link to={`/product/${product._id}`}>
                                                <img src={product.src} alt="" className={cx('card-img')} />
                                            </Link>
                                            <div className={cx('content')}>
                                                <h3>
                                                    <Link to={`/product/${product._id}`} className={cx('card-title')}>
                                                        {product.title}
                                                    </Link>
                                                </h3>
                                                <span className={cx('card-price')}> {product.price}.000 VND</span>
                                                {/* <p className={cx('card-text')}>{product.description}</p> */}
                                                <button
                                                    className={cx('card-button')}
                                                    onClick={() => addCart(product._id)}
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}
export default Shop;
// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import {DataContext} from '../Context'
// import '../css/Products.css'

// export class Products extends Component {

//     static contextType = DataContext;

//     render() {
//         const {products,addCart} = this.context;
//         return (
//             <div id="product">
//                {
//                    products.map(product =>(
//                        <div className="card" key={product._id}>
//                            <Link to={`/product/${product._id}`}>
//                                <img src={product.src} alt=""/>
//                            </Link>
//                            <div className="content">
//                                <h3>
//                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
//                                </h3>
//                                <span>${product.price}</span>
//                                <p>{product.description}</p>
//                                <button onClick={()=> addCart(product._id)}>Add to cart</button>
//                            </div>
//                        </div>
//                    ))
//                }
//             </div>
//         )
//     }
// }

// export default Products
