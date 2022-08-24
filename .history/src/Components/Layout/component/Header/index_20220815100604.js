import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import Menu, { MenuItem } from './Menu';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Tippy from '@tippyjs/react/headless';
// import { DataContext } from './Context';

import MenuIcon from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
// import AccountItem from '~/Components/AccountItem';
// import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    //  static contextType = DataContext;
    const [toggle, setToggle] = useState('false');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu')} onClick={() => setToggle(!toggle)}>
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
                    <Menu className={cx('menu-link')}>
                        <MenuItem className={cx('menu-item')} title="Shop" to={config.routes.shop} />
                        <MenuItem className={cx('menu-item')} title="News" to={config.routes.news} />
                        <MenuItem className={cx('menu-item')} title="About" to={config.routes.about} />
                        <MenuItem className={cx('menu-item')} title="Sale" to={config.routes.sale} />
                        <MenuItem className={cx('menu-item')} title="Contact" to={config.routes.contact} />
                        <div className={cx('close')} onClick={() => setToggle('true')}>
                            <img src={Close} alt="" width="20" />
                        </div>
                    </Menu>
                </div>
                <div className={cx('action')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </Tippy>
                    <div className={cx('Register-Signup')}>
                        <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.register}>
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </div>
                    <div className={cx('Cart')}>
                        <img src={CartIcon} alt="" width="20" />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
