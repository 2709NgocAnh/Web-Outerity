// import { useEffect, useState } from 'react';

import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import Menu, { MenuItem } from './Menu';
import styles from './Header.module.scss';
// import { Wrapper as PopperWrapper } from '~/Components/Popper';
import { DataContext } from '~/pages/Cart/DataProvider';

import MenuIcon from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import { DataProvider } from '~/pages/Cart/DataProvider';
import Search from './Search/index';
// import AccountItem from '~/Components/AccountItem';
// import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const styleMenu = {
        left: menu ? 0 : '-100%',
    };
    //Search
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu')} onClick={toggleMenu}>
                    <img src={MenuIcon} alt="" width="20" />
                </div>
                <div className={cx('logo')}>
                    <img
                        height="80px"
                        width="150px"
                        itemProp="logo"
                        src="https://file.hstatic.net/200000312481/file/logoo_bf8b94d84c4242109555c773681d1a61.png"
                        alt="Outerity"
                        classNames={cx('img-responsive logoimg')}
                    ></img>
                </div>

                <ul style={styleMenu}>
                    <Menu className={cx('menu-link')}>
                        <li>
                            <MenuItem title="Shop" to={config.routes.shop} />
                        </li>
                        <li>
                            <MenuItem title="News" to={config.routes.news} />
                        </li>
                        <li>
                            <MenuItem title="About" to={config.routes.about} />
                        </li>
                        <li>
                            <MenuItem title="Sale" to={config.routes.sale} />
                        </li>
                        <li>
                            <MenuItem title="Contact" to={config.routes.contact} />
                        </li>
                        <li className={cx('close')} onClick={toggleMenu}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </Menu>
                </ul>

                <div className={cx('action')}>
                    <div className={cx('search')}>
                        <input placeholder="Tim kiem..." spellCheck={false} />

                        <button className={cx('search-btn')} onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                            <FontAwesomeIcon icon={faSearch} />
                            {<Search data={data} />}
                        </button>
                    </div>

                    <div className={cx('Register-Signup')}>
                        <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.register}>
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </div>
                    <div className={cx('Cart')}>
                        <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                            <img src={CartIcon} alt="" width="20" />
                        </NavLink>

                        <span>{cart.length}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
