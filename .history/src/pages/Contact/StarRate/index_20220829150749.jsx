import classNames from 'classnames/bind';
import styles from '../Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { useRef, useEffect, useState } from 'react';
import './StarRate.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
};
function StarRate() {
    TabTitle('Star Rate');
    const userRef = useRef();
    const cx = classNames.bind(styles);
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    useEffect(() => {
        userRef.current.focus();
    }, []);
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };
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
                                placeholder="Email của bạn"
                                className={cx('form-input')}
                                type="email"
                                // id="userEmail"
                                // ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                                onBlur={handleFocus}
                                required="true"
                                focused={focused.toString()}
                            />
                            <span className={cx('wrapper-text-err')}>Vui lòng nhập lại mail</span>
                            <textarea
                                // rows="10"
                                // cols="70"
                                placeholder="Ý kiến của bạn"
                                className="wrapper-text"
                                pattern="\S+.*"
                                onBlur={handleFocus}
                                required="true"
                                focused={focused.toString()}
                                onChange={(event) => setText(event.target.value)}
                            />

                            {/* <span className="wrapper-text-err">
                                {title === '' ? 'Vui lòng nhâp ý kiến của bạn' : title}
                            </span> */}
                            <button className="wrapper-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StarRate;
