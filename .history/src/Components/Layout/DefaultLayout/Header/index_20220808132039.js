import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
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
                    <div className={cx('search')}>
                        <input placeholder="Tim kiem..." spellCheck={false} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
