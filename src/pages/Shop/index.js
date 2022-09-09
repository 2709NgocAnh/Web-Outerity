import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { DataContext } from '~/pages/Cart/DataProvider';
import TabTitle from '~/Components/config/TabTitle';
import Pagination from '~/Components/pagination/Pagination';

export default function Shop() {
    TabTitle('Shop');

    const value = useContext(DataContext);
    const [collects] = value.collects;
    const [products] = value.products;
    const addCart = value.addCart;
    const cx = classNames.bind(styles);

    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    if (loading) {
        return <h2>Loading...</h2>;
    }
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
                            <div class="col-xl-2 col-sm-12 col-xs-12">
                                <div class="sidebar-page">
                                    <div class="group-menu">
                                        <div class="page_menu_title title_block">
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.collect}
                                            >
                                                <h2>Danh mục </h2>
                                            </NavLink>
                                        </div>
                                        <div class="layered layered-category">
                                            <div class="layered-content">
                                                <ul class="tree-menu">
                                                    {collects.map((collect) => {
                                                        return (
                                                            <li className={cx('active1')} key={collect.id}>
                                                                <span></span>
                                                                <NavLink
                                                                    to={`${collect.link}`}
                                                                    activeClassName={cx('active')}
                                                                >
                                                                    {collect.title}
                                                                </NavLink>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* col-xl-3 col-lg-4 col-md-9 */}
                            <div class="col-xl-10 col-sm-12 col-xs-12">
                                <div className={cx('row')}>
                                    {currentPosts.map((product) => {
                                        return (
                                            <div
                                                className={cx('col-xl-3 col-lg-3 col-md-3 product-item card')}
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
                                                        <Link
                                                            to={`/product/${product._id}`}
                                                            className={cx('card-title')}
                                                        >
                                                            {product.title}
                                                        </Link>
                                                    </h3>
                                                    <span className={cx('card-price')}> {product.price}.000 VND</span>

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
                            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
