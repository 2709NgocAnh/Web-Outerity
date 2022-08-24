import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import Menu, { MenuItem } from './Menu';
import Register from '~/pages/Register';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Tippy from '@tippyjs/react/headless';
// import AccountItem from '~/Components/AccountItem';
// import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        height="70px"
                        width="150px"
                        itemProp="logo"
                        src="https://file.hstatic.net/200000312481/file/logoo_bf8b94d84c4242109555c773681d1a61.png"
                        alt="Outerity"
                        classNames={cx('img-responsive logoimg')}
                    ></img>
                </div>
                <div className={cx('menulink')}>
                    <Menu>
                        <MenuItem title="Shop" to={config.routes.shop} />
                        <MenuItem title="News" to={config.routes.news} />
                        <MenuItem title="About" to={config.routes.about} />
                        <MenuItem title="Sale" to={config.routes.sale} />
                        <MenuItem title="Contact" to={config.routes.contact} />
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
                        <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
