import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    const cx = classNames.bind(styles);
    return (
        <div>
            <h1> THÔNG TIN HỆ THỐNG CỬA HÀNG DIRTYCOINS</h1>
            <br />
            <h2>HỆ THỐNG CỬA HÀNG</h2>
            <div className={cx('footer-content-title')}>
                <ul>Chi Nhánh Hồ Chí Minh</ul>
                <li className={cx('footer-content-item')}>- Quận 10 - 561 Sư Vạn Hạnh, Phường 13.</li>
                <li className={cx('footer-content-item')}>- Quận Tân Bình - 136 Nguyễn Hồng Đào, Phường 14. Quận 1</li>

                <li className={cx('footer-content-item')}>- Central Market 4 Phạm Ngũ Lão, Phường Phạm Ngũ Lão.</li>
                <li className={cx('footer-content-item')}>- Quận Gò Vấp - 41 Quang Trung, Phường 3.</li>
            </div>
        </div>
    );
}

export default Contact;
