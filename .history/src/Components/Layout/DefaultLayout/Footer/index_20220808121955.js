import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <Footer className={cx('Header-wrapper')}>
            <div className={cx('Header-inner')}>
                <h2>Phan thij ngocj anh</h2>
            </div>
        </Footer>
    );
}

export default Footer;
