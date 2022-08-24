import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import StarRate from './StarRate';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { useState } from 'react';
import './StarRate.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
};
function StarRate() {
    const [title, setTitle] = useState('');

    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
function Contact() {
    TabTitle('Contact');
    const cx = classNames.bind(styles);
    return (
        <>
            <div className={cx('wrap')}>
                <div class="col-md-3 col-sm-12 col-xs-12">
                    <div class="sidebar-page">
                        <div class="group-menu">
                            <div class="page_menu_title title_block">
                                <h2>Danh mục trang</h2>
                            </div>
                            <div class="layered layered-category">
                                <div class="layered-content">
                                    <ul class="tree-menu">
                                        <li class="active">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.infostore}
                                            >
                                                Thông tin cửa hàng
                                            </NavLink>
                                        </li>

                                        <li class="">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.starrate}
                                            >
                                                Góp ý khách hàng
                                            </NavLink>
                                        </li>

                                        <li class="">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.termsservice}
                                            >
                                                Thông tin cửa hàng
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="page-wrapper">
                        <div className="wrapper">
            <h1 className="wrapper-title">Ý kiến khách hàng </h1>
            <div className="stars">
                {stars.map((_, index) => {
                    return (
                        <FontAwesomeIcon
                            icon={faStar}
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: 'pointer',
                            }}
                        />
                    );
                })}
            </div>
            <input
                className="wrapper-input"
                type="email"
                placeholder=" Email "
                pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                onBlur={handleFocus}
                required="true"
                focused={focused.toString()}
            />
            <span>Vui lòng nhập lại mail</span>
            <textarea
                // rows="10"
                // cols="70"
                placeholder="Ý kiến của bạn"
                className="wrapper-text"
                pattern="\S+.*"
                onBlur={handleFocus}
                required="true"
                focused={focused.toString()}
                onChange={(event) => setTitle(event.target.value)}
            />

            <span className="wrapper-text-err">{title === '' ? 'Vui lòng nhâp ý kiến của bạn' : ''}</span>
            <button className="wrapper-btn">Submit</button>
        </div>
          </div>                   
</>
    );
}
export default StarRate;
{
    /* <div className={cx('row')}>
                <div class="col-md-5 col-sm-12 col-xs-12">
                    <div className="StarRate">
                        <StarRate />
                    </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                    <br />
                    <br />
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
                                <li className={cx('footer-content-item')}>- Quận 10 - 561 Sư Vạn Hạnh, Phường 13.</li>
                                <li className={cx('footer-content-item')}>
                                    - Quận Tân Bình - 136 Nguyễn Hồng Đào, Phường 14. Quận 1
                                </li>

                                <li className={cx('footer-content-item')}>
                                    - Central Market 4 Phạm Ngũ Lão, Phường Phạm Ngũ Lão.
                                </li>
                                <li className={cx('footer-content-item')}>- Quận Gò Vấp - 41 Quang Trung, Phường 3.</li>
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
        </div> */
}




       
