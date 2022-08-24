import classNames from 'classnames/bind';
import styles from './News.module.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { DataContext } from '~/pages/Cart/DataProvider';

export default function Sale() {
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const cx = classNames.bind(styles);

    return (
        <>
            <div className={cx('header')}>
                <button className={cx('header-btn')}>News</button>
            </div>
            <div className={cx('header-title')}>NEWS PRODUCT</div>
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
                                        <NavLink
                                            className={(nav) => cx({ active: nav.isActive })}
                                            to={`/product/${product._id}`}
                                        >
                                            <img src={product.images[0]} alt="" className={cx('card-img')} />
                                        </NavLink>

                                        <div className={cx('content')}>
                                            <h3>
                                                <Link to={`/product/${product._id}`} className={cx('card-title')}>
                                                    {product.title}
                                                </Link>
                                            </h3>
                                            <span className={cx('card-price')}> {product.price}.000 VND</span>

                                            <button className={cx('card-button')} onClick={() => addCart(product._id)}>
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
