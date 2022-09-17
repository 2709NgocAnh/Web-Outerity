import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function ProfileUser() {
    TabTitle('Tài khoản của tôi');
    const cx = classNames.bind(styles);
    const [profile, setProfile] = useState();
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
                setProfile(response.data.user);
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

    return (
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
                                        <NavLink to="/profileuser">Tài khoản của tôi</NavLink>
                                    </li>

                                    <li className="">
                                        <span></span>
                                        <NavLink to={config.routes.profileorder}>Đơn hàng của tôi</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
                <div className={cx('single')}>
                    <div className={cx('singleContainer')}>
                        <div className={cx('top')}>
                            <div className={cx('left')}>
                                {/* <h1 className={cx('title')}></h1> */}
                                <div className={cx('item')}>
                                    <NavLink
                                        className={(nav) => cx({ active: nav.isActive })}
                                        to={`/profileuser/EditProfileUser/${profile?.id}`}
                                    >
                                        <div
                                            className={cx('editButton')}
                                            style={{
                                                width: '80px',
                                                height: '40px',
                                                textAlign: 'center',
                                                fontSize: '1.4rem',
                                            }}
                                        >
                                            Edit
                                        </div>
                                    </NavLink>
                                    <img
                                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                        alt="avatar"
                                        className={cx('itemImg')}
                                    />
                                    <div className={cx('details')}>
                                        <h1 className={cx('itemTitle')}>{profile?.name}</h1>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Email:</span>
                                            <span className={cx('itemValue')}>{profile?.email}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Phone:</span>
                                            <span className={cx('itemValue')}>{profile?.phone}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Address:</span>
                                            <span className={cx('itemValue')}>{profile?.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
