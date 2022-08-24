import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Popper/Wrapper';
import styles from './Header.module.scss';
import AccountItem from '~/Components/AccountItem';
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
                        height="42px"
                        width="118px"
                        itemProp="logo"
                        src="https://file.hstatic.net/200000312481/file/logoo_bf8b94d84c4242109555c773681d1a61.png"
                        alt="Outerity"
                        classNames={cx('img-responsive logoimg')}
                    ></img>
                </div>
                <div className={cx('link page')}></div>
                <div className={cx('action')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Tim kiem" spellCheck={false} />
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
                        <FontAwesomeIcon icon={faUser} />
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
