import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/Components/config';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { DarkModeContext } from '../../context/darkModeContext';
// import { useContext } from 'react';
const cx = classNames.bind(styles);
const Sidebar = () => {
    const logout = () => {
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/user/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )
            .then(function (response) {
                if (response.data.result) {
                    Cookies.remove('accessToken');
                    localStorage.removeItem('cart');
                    window.location.href = 'http://localhost:3000/register';
                } else {
                    console.log(response);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };
    return (
        <div className={cx('sidebar')}>
            {/* <div className="top">
                <Link to={config.routes.home} style={{ textDecoration: 'none' }}>
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <hr /> */}
            <div className={cx('center')}>
                <ul>
                    <p className={cx('title')}>MAIN</p>
                    <Link to="/admin" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className={cx('icon')} />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className={cx('title')}>LISTS</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className={cx('icon')} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/categorys" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className={cx('icon')} />
                            <span>Category</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <StoreIcon className={cx('icon')} />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className={cx('icon')} />
                            <span>Orders</span>
                        </li>
                    </Link>

                    <Link to="/sliders" style={{ textDecoration: 'none' }}>
                        <li>
                            <LocalShippingIcon className={cx('icon')} />
                            <span>Sliders</span>
                        </li>
                    </Link>
                    <Link to="/feedbacks" style={{ textDecoration: 'none' }}>
                        <li>
                            <LocalShippingIcon className={cx('icon')} />
                            <span>Feedback</span>
                        </li>
                    </Link>

                    <p className={cx('title')}>USEFUL</p>
                    {/* <li>
                        <InsertChartIcon className={cx('icon')} />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className={cx('icon')} />
                        <span>Notifications</span>
                    </li>
                    <p className={cx('title')}>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className={cx('icon')} />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className={cx('icon')} />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className={cx('icon')} />
                        <span>Settings</span>
                    </li>
                    <p className={cx('title')}>USER</p> */}
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <li>
                            <AccountCircleOutlinedIcon className={cx('icon')} />
                            <span>Profile</span>
                        </li>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }} onClick={logout}>
                        <li>
                            <ExitToAppIcon className={cx('icon')} />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
            {/* <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div> */}
        </div>
    );
};

export default Sidebar;
