// import { useEffect, useState } from 'react';g

import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import Menu, { MenuItem } from './Menu';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { DataContext } from '~/pages/Cart/DataProvider';
import MenuIcon from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import axios from 'axios';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);

function Header() {
    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;
    const [profile, setProfile] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setProfile(response.data.user);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const styleMenu = {
        left: menu ? 0 : '0%',
    };
    const logout = () => {
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/user/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )
            .then(function (response) {
                if (response.data.result) {
                    Cookies.remove('accessToken');
                    localStorage.removeItem('cart');
                    window.location.href = 'http://localhost:3000/register';
                } else {
                    console.log(response);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu')} onClick={toggleMenu}>
                    <img src={MenuIcon} alt="" width="20" />
                </div>
                <div className={cx('logo')}>
                    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={'/list'}>
                        <img
                            height="80px"
                            width="150px"
                            itemProp="logo"
                            src="https://file.hstatic.net/200000312481/file/logoo_bf8b94d84c4242109555c773681d1a61.png"
                            alt="Outerity"
                            className={cx('img-responsive logoimg')}
                        />
                    </NavLink>
                </div>

                <ul style={styleMenu}>
                    <Menu className={cx('menu-link')}>
                        <li>
                            <MenuItem title="Shop" to={'/list'} />
                        </li>
                        {/* <li>
                            <MenuItem title="News" to={config.routes.news} />
                        </li> */}
                        <li>
                            <MenuItem title="About" to={config.routes.about} />
                        </li>
                        {/*  <li>
                            <MenuItem title="Sale" to={config.routes.sale} />
                        </li> */}
                        <li>
                            <MenuItem title="Contact" to={config.routes.contact} />
                        </li>
                        <li className={cx('close')} onClick={toggleMenu}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </Menu>
                </ul>

                <div className={cx('action')}>
                    {profile != null ? (
                        <>
                            <div className={cx('dropdown')} onClick={toggleMenu}>
                                <div
                                    className={cx('item')}
                                    style={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        style={{
                                            borderRadius: '50%',
                                            width: '36px',
                                            height: '36px',
                                            marginRight: '8px',
                                        }}
                                        src={profile?.avatar}
                                        alt="avatar"
                                        className="avatar"
                                    />
                                    <h4 style={{ margin: 'auto' }}>{profile?.name}</h4>
                                </div>

                                <ul className={cx('dropdown-menu')} style={styleMenu}>
                                    <li>
                                        <NavLink to="/profileuser" style={{ color: 'black' }}>
                                            Tài khoản của tôi
                                        </NavLink>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <buton onClick={logout} style={{ cursor: 'pointer' }}>
                                            Đăng xuất
                                        </buton>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className={cx('Register-Signup')}>
                            {/* <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.register}>
                                <FontAwesomeIcon icon={faUser} />
                            </NavLink> */}
                        </div>
                    )}
                    <div className={cx('Cart')}>
                        <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                            <img src={CartIcon} alt="" width="20" />
                        </NavLink>

                        <span>{cart.reduce((total, val) => total + val.cartNum, 0)}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
