import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import config from '~/Components/config';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { NavLink } from 'react-router-dom';
import axios from '../api/axios';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        axios
            .post('http://localhost:8080/tttn_be/public/api/user/login', { email, password })
            .then(function (response) {
                console.log(response.data.result);
                if (response.data.result) {
                    const accessToken = response.data.access_token;
                    Cookies.set('accessToken', response.data.access_token, {
                        expires: response.data.expires_in,
                        path: '/',
                    });
                    /*  document.cookie = `accessToken=${accessToken};expires=${expires_in};path=/`; */
                    const roles = response.data.user.type_id;
                    setAuth({ email, password, roles, accessToken });
                    setEmail('');
                    setPassword('');
                    if (roles === 1) {
                        window.location.href = 'http://localhost:3000/admin';
                    } else {
                        window.location.href = 'http://localhost:3000';
                    }
                } else {
                    alert(response.data.message);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };

    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                </p>
                <h3 className={cx('form-heading')}>ĐĂNG NHẬP </h3>
                <form onSubmit={handleSubmit} className={cx('form-signup')}>
                    <div className={cx('form-group')}>
                        <i className="fa-solid fa-envelope" />
                        <input
                            placeholder="Email của bạn"
                            className={cx('form-input')}
                            type="email"
                            id="userEmail"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                            onBlur={handleFocus}
                            required
                            focused={focused.toString()}
                        />
                        {/* <span className={cx('err')}>It should be a valid email address!</span> */}
                    </div>
                    <div className={cx('form-group')}>
                        <i className="fa-solid fa-lock" />
                        <input
                            placeholder="Password của bạn"
                            className={cx('form-input')}
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>

                    <button className={cx('form-submit')}>Đăng nhập</button>
                </form>

                <NavLink className={cx('forget-password')} to={config.routes.forgetpassword}>
                    Quên mật khẩu?
                </NavLink>
            </section>
        </>
    );
};

export default Login;
