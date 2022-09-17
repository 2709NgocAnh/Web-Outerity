import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import config from '~/Components/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NumericFormat } from 'react-number-format';
import { DataContext } from '~/pages/Cart/DataProvider';
import TabTitle from '~/Components/config/TabTitle';
import Pagination from '~/Components/pagination/Pagination';
export default function Shop() {
    const { id } = useParams();
    TabTitle('Shop');

    const value = useContext(DataContext);
    const [search, setSearch] = useState('');
    const [s, setS] = useState('');
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (!auth) {
            window.location.href = 'http://localhost:3000/register';
        }
    }, [auth]);
    //const [collects] = value.collects;
    //const [products] = value.products;
    const [products, setProducts] = useState([]);
    const [collects, setCollects] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [listpage, setListpage] = useState([]);
    const [totalpage, setTotalpage] = useState([]);
    const addCart = value.addCart;
    const cx = classNames.bind(styles);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const aaa = async () => {
            /* const data = await axios.get(`http://localhost:8080/tttn_be/public/api/product/list/${id}`); */
            const data = await axios.get(
                `http://localhost:8080/tttn_be/public/api/product/listproduct/${id}?search=${search}`,
            );
            return data;
        };
        aaa()
            .then((response) => {
                setProducts(response.data.products);
                /*   setListpage(response.data.products.links);
                setTotalpage(response.data.products.last_page); */
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id, search]);

    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/category/listactive`);
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

    if (products?.length === 0) {
        return (
            <>
                <div className={cx('search')}>
                    <input
                        placeholder="Tim kiem..."
                        spellCheck={false}
                        // className={cx('search')}
                        value={s}
                        onChange={(e) => {
                            setS(e.target.value);
                        }}
                    />

                    <button
                        className={cx('search-btn')}
                        onClick={() => {
                            setSearch(s);
                        }}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className={cx('header')}>
                    <button className={cx('header-btn')}>Shop</button>
                </div>
                <div>
                    <section className={cx('product')}>
                        <div className={cx('container')}>
                            <div className={cx('row')}>
                                <div class="col-xl-2 col-sm-12 col-xs-12">
                                    <div class="sidebar-page">
                                        <div class="group-menu">
                                            <div class="page_menu_title title_block">
                                                <NavLink className={(nav) => ({ active: nav.isActive })} to={`/list`}>
                                                    <h2>Tất cả sản phẩm </h2>
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
                                                                        to={`/${collect.id}`}
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
                                <div class="col-xl-10 col-sm-12 col-xs-12">
                                    <div className={cx('row')}>
                                        <img
                                            src="https://vietnam.extranet-aec.com/img/empty-cart.png"
                                            alt="ảnh lỗi"
                                            className={cx('cardimg')}
                                        />
                                        <h1 className={cx('noproduct')}>Không có sản phẩm</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={cx('search')}>
                    <input
                        placeholder="Tim kiem..."
                        spellCheck={false}
                        // className={cx('search')}
                        value={s}
                        onChange={(e) => {
                            setS(e.target.value);
                        }}
                    />

                    <button
                        className={cx('search-btn')}
                        onClick={() => {
                            setSearch(s);
                        }}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('header')}>
                    <button className={cx('header-btn')}>Shop</button>
                </div>
                {/* <div className={cx('header-title')}>BEST SELLER</div> */}
                <div>
                    <section className={cx('product')}>
                        <div className={cx('container')}>
                            <div className={cx('row')}>
                                <div class="col-xl-2 col-sm-12 col-xs-12">
                                    <div class="sidebar-page">
                                        <div class="group-menu">
                                            <div class="page_menu_title title_block">
                                                <NavLink className={(nav) => ({ active: nav.isActive })} to={'/list'}>
                                                    <h2>Tất cả sản phẩm </h2>
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
                                                                        to={`/${collect.id}`}
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
                                <div class="col-xl-10 col-sm-12 col-xs-12">
                                    <div className={cx('row')}>
                                        {currentPosts?.map((product) => {
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

                                                        {product.price_sale != null ? (
                                                            <div className={cx('price')}>
                                                                <del className={cx('card-price')}>
                                                                    {' '}
                                                                    {product.price.toLocaleString('it-IT', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    })}
                                                                </del>
                                                                <span className={cx('card-price')}>
                                                                    {' '}
                                                                    {product.price_sale.toLocaleString('it-IT', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    })}
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className={cx('price')}>
                                                                    <span className={cx('card-price')}>
                                                                        {' '}
                                                                        {product.price.toLocaleString('it-IT', {
                                                                            style: 'currency',
                                                                            currency: 'VND',
                                                                        })}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )}

                                                        <button
                                                            className={cx('card-button')}
                                                            onClick={() => {
                                                                addCart(product, 1);
                                                            }}
                                                        >
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={products.length}
                                    paginate={paginate}
                                />
                                {/* <Pagination
                                    listpage={listpage}
                                    setCurrentpage={setCurrentpage}
                                    currentpage={currentpage}
                                    totalpage={totalpage}
                                /> */}
                                ;
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}
