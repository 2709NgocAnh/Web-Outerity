import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrap')}>
            <h1> THÔNG TIN HỆ THỐNG CỬA HÀNG DIRTYCOINS</h1>
            <br />
            <h2>HỆ THỐNG CỬA HÀNG</h2>
            <div className={cx('footer-content-title')}>
                <ul>
                    <h3></h3>Chi Nhánh Hồ Chí Minh
                </ul>
                <li className={cx('footer-content-item')}>- Quận 10 - 561 Sư Vạn Hạnh, Phường 13.</li>
                <li className={cx('footer-content-item')}>- Quận Tân Bình - 136 Nguyễn Hồng Đào, Phường 14. Quận 1</li>

                <li className={cx('footer-content-item')}>- Central Market 4 Phạm Ngũ Lão, Phường Phạm Ngũ Lão.</li>
                <li className={cx('footer-content-item')}>- Quận Gò Vấp - 41 Quang Trung, Phường 3.</li>
            </div>
            <div className={cx('footer-content footer-contact')}>
                <ul>
                    <li className={cx('contact-1')}>TP.HCM</li>
                    <li className={cx('contact-2')}>0343803696</li>
                    <li className={cx('contact-3')}>coming soon</li>
                    <li className={cx('contact-4')}>outerity.local@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
