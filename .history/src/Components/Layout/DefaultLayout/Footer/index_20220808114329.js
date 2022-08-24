import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <header className={cx('wrapper')}>
            <h2>Phan thij ngocj anh</h2>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Footer;
