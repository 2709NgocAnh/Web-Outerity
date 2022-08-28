import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { DataContext } from '~/pages/Cart/DataProvider';
import TabTitle from '~/Components/config/TabTitle';
import Pagination from '~/Components/pagination/Pagination';
export default function Shop() {
    TabTitle('Shop');

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const cx = classNames.bind(styles);

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
                            <div class="col-md-3 col-sm-12 col-xs-12">
                                <div class="sidebar-page">
                                    <div class="group-menu">
                                        <div class="page_menu_title title_block">
                                            <h2>Danh mục trang</h2>
                                        </div>
                                        <div class="layered layered-category">
                                            <div class="layered-content">
                                                <ul class="tree-menu">
                                                    <li class="active">
                                                        <span></span>
                                                        <NavLink
                                                            className={(nav) => ({ active: nav.isActive })}
                                                            to={config.routes.about}
                                                        >
                                                            Giới thiệu
                                                        </NavLink>
                                                    </li>

                                                    <li class="">
                                                        <span></span>
                                                        <NavLink
                                                            className={(nav) => ({ active: nav.isActive })}
                                                            to={config.routes.returnpolicy}
                                                        >
                                                            Chính sách đổi trả
                                                        </NavLink>
                                                    </li>

                                                    <li class="">
                                                        <span></span>
                                                        <NavLink
                                                            className={(nav) => ({ active: nav.isActive })}
                                                            to={config.routes.privacypolicy}
                                                        >
                                                            Chính sách bảo mật
                                                        </NavLink>
                                                    </li>

                                                    <li class="">
                                                        <span></span>
                                                        <NavLink
                                                            className={(nav) => ({ active: nav.isActive })}
                                                            to={config.routes.termsservice}
                                                        >
                                                            Điều khoản dịch vụ
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-12 col-xs-12">
                                {products.map((product) => {
                                    return (
                                        <div
                                            className={cx('col-xl-3 col-lg-4 col-md-9 col-sm-12 product-item card')}
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
                            <Pagination />;
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
