import classNames from 'classnames/bind';
import styles from '../Contact.module.scss';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { useRef, useEffect, useState, useContext } from 'react';
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
    const [email, setEmail] = useState();
    const [content, setContent] = useState('');
    const [err, setErr] = useState('');
    const [focused, setFocused] = useState(false);
    const [auth, setAuth] = useState(true);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
                console.log(auth);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (!auth) {
            window.location.href = 'http://localhost:3000/register';
        }
    }, [auth]);
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            });
            return data;
        };
        aaa()
            .then((response) => {
                setEmail(response.data.user.email);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        if (content === '' && focused) {
            setErr('H??y nh???p ?? ki???n c???a b???n');
        } else {
            setErr('');
        }
    }, [content, focused]);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);
    const handleFocus = (e) => {
        setFocused(true);
    };
    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/feedback/add',
                { email, content },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )
            .then(function (response) {
                if (response.data.result) {
                    alert(response.data.message);
                    setEmail('');
                    setContent('');
                } else {
                    alert(response.data.error);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };
    return (
        <>
            <div className={cx('wrap')}>
                <div class="col-md-3 col-sm-12 col-xs-12">
                    <div class="sidebar-page">
                        <div class="group-menu">
                            <div class="page_menu_title title_block">
                                <h2>Danh m???c trang</h2>
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
                                                Th??ng tin c???a h??ng
                                            </NavLink>
                                        </li>

                                        <li class="">
                                            <span></span>
                                            <NavLink
                                                className={(nav) => ({ active: nav.isActive })}
                                                to={config.routes.starrate}
                                            >
                                                G??p ?? kh??ch h??ng
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
                            <h1 className="wrapper-title">?? ki???n kh??ch h??ng </h1>
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
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                <input
                                    placeholder="Email c???a b???n"
                                    className={cx('wrapper-input ')}
                                    type="email"
                                    // id="userEmail"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                                    onBlur={handleFocus}
                                    required="true"
                                    focused={focused.toString()}
                                />
                                <span className={cx('err')}>Vui l??ng nh???p l???i mail</span>
                                <textarea
                                    placeholder="?? ki???n c???a b???n"
                                    className="wrapper-text"
                                    pattern="\S+.*"
                                    onBlur={handleFocus}
                                    value={content}
                                    required="true"
                                    onChange={(event) => {
                                        setContent(event.target.value);
                                        setFocused(true);
                                    }}
                                />

                                <span className="wrapper-text-err">{err}</span>
                                <button className="wrapper-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StarRate;
