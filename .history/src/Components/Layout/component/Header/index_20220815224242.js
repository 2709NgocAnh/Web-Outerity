import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import config from '~/Components/config';
import Menu, { MenuItem } from './Menu';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import { DataContext } from './Context';

import MenuIcon from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
// import AccountItem from '~/Components/AccountItem';
// import images from '~/assets/images';

const cx = classNames.bind(styles);
// function Header() {
//     const { cart } = React.useContext(DataContext);
//     const [toggle, setToggle] = useState('false');
//     const handleClose = () => {
//         setToggle(toggle === 'false' ? 'true' : 'false');
//     };
//     const [searchResult, setSearchResult] = useState([]);

//     useEffect(() => {
//         setTimeout(() => {
//             setSearchResult([]);
//         }, 0);
//     }, []);
export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false,
    };

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('menu')} onClick={this.menuToggle}>
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
                    <div className={toggle ? 'toggle' : ''}>
                        <ul>
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
                                <li className={cx('close')} onClick={this.menuToggle}>
                                    <img src={Close} alt="" width="20" />
                                </li>
                            </Menu>
                        </ul>
                    </div>
                    <div className={cx('action')}>
                        {/* <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper> */}
                        {/* <div>
                            <h4 className={cx('search-title')}>Accounts</h4> */}
                            {/* </PopperWrapper> */}
                        </div>

                        <div className={cx('search')}>
                            <input placeholder="Tim kiem..." spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        {/* </Tippy> */}
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
}
export default Header;
