import classNames from 'classNames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import '../StarRate.scss';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
function Contact() {
    TabTitle('Contact');
    const cx = classNames.bind(styles);
    return (
        <>
            <div className={cx('wrap')}>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar-page">
                        <div className="group-menu">
                            <div className="page_menu_title title_block">
                                <h2>Danh mục trang</h2>
                            </div>
                            <div className="layered layered-category">
                                <div className="layered-content">
                                    <ul className="tree-menu">
                                        <li className="active">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.infostore}
                                            >
                                                Thông tin cửa hàng
                                            </NavLink>
                                        </li>

                                        <li className="">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.starrate}
                                            >
                                                Góp ý khách hàng
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div className="page-wrapper">
                        <div className="heading-page">
                            <h1>Giới thiệu</h1>
                        </div>
                        <div className="wrapbox-content-page">
                            <div className="content-page ">
                                <div className="info">
                                    <FontAwesomeIcon icon={faStarAndCrescent} style={{ fontSize: '1.6rem' }} />
                                    <br />
                                    <h1> THÔNG TIN HỆ THỐNG CỬA HÀNG DIRTYCOINS</h1>
                                    <br />
                                    <h2>HỆ THỐNG CỬA HÀNG</h2>
                                    <br />
                                    <div className={cx('footer-content-title')}>
                                        <h3>Chi Nhánh Hồ Chí Minh</h3>
                                        <br />
                                        <br />
                                        <ul>
                                            <li className={cx('footer-content-item')}>
                                                - Quận 10 - 561 Sư Vạn Hạnh, Phường 13.
                                            </li>
                                            <li className={cx('footer-content-item')}>
                                                - Quận Tân Bình - 136 Nguyễn Hồng Đào, Phường 14. Quận 1
                                            </li>

                                            <li className={cx('footer-content-item')}>
                                                - Central Market 4 Phạm Ngũ Lão, Phường Phạm Ngũ Lão.
                                            </li>
                                            <li className={cx('footer-content-item')}>
                                                - Quận Gò Vấp - 41 Quang Trung, Phường 3.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('footer-content ')}>
                                        <ul>
                                            <li className={cx('footer-contact contact-1')}>TP.HCM</li>
                                            <li className={cx('footer-contact contact-2')}>0343803696</li>
                                            <li className={cx('footer-contact contact-3')}>coming soon</li>
                                            <li className={cx('footer-contact contact-4')}>outerity.local@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
