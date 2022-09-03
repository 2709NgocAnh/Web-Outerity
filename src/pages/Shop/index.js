import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import axios from 'axios';
import { DataContext } from '~/pages/Cart/DataProvider';
import TabTitle from '~/Components/config/TabTitle';
import Pagination from '~/Components/pagination/Pagination';
export default function Shop() {
    TabTitle('Shop');

    const value = useContext(DataContext);
    //const [collects] = value.collects;
    //const [products] = value.products;
    const [products, setProducts] = useState([]);
    const [collects, setCollects] = useState([]);
    const addCart = value.addCart;
    const cx = classNames.bind(styles);

    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/product/list`);
            return data;
        };
        aaa()
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/category/list`);
            return data;
        };
        aaa()
            .then((response) => {
                setCollects(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
                                                            <li class="active" key={collect.id}>
                                                                <span></span>
                                                                <NavLink
                                                                    className={(nav) => ({ active: nav.isActive })}
                                                                    to={`${collect.link}`}
                                                                >
                                                                    {collect.name}
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
                                    {products.map((product) => {
                                        return (
                                            <div
                                                className={cx('col-xl-3 col-lg-3 col-md-3 product-item card')}
                                                key={product.id}
                                            >
                                                <NavLink
                                                    className={(nav) => cx({ active: nav.isActive })}
                                                    to={`/product/${product.id}`}
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt="ảnh sản phẩm"
                                                        className={cx('card-img')}
                                                    />
                                                </NavLink>

                                                <div className={cx('content')}>
                                                    <h3>
                                                        <Link
                                                            to={`/product/${product.id}`}
                                                            className={cx('card-title')}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    <span className={cx('card-price')}> {product.price} VND</span>

                                                    <button
                                                        className={cx('card-button')}
                                                        onClick={() => addCart(product.id)}
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <Pagination />;
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
