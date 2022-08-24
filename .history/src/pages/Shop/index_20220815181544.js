import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
// import { data } from '~/pages/Shop/data';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from '~/Components/Layout/component/Header/Context'

// function Shop() {
//     const cx = classNames.bind(styles);
    export class Shop extends Component {

    static contextType = DataContext;

    render() {
        const cx = classNames.bind(styles);
        const {products,addCart} = this.context;
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
                            {products.map((product => {
                                return (
                                    <div
                                        className={cx('col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item')}
                                        key={product._id}
                                    >
                                        <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                                    </div>
                                );
                            }))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
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
export default Shop;
