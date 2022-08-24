import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import config from '~/Components/config';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { NavLink } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/auth';
const cx = classNames.bind(styles);
const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
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
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                                onBlur={handleFocus}
                                required="true"
                                focused={focused.toString()}
                            />
                        </div>
                        <span>It should be a valid email address!</span>
                        <div className={cx('form-group')}>
                            <i className="fa-solid fa-envelope" />
                            <input
                                placeholder="Password của bạn"
                                className={cx('form-input')}
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <button className={cx('form-submit')}>Đăng nhập</button>
                    </form>

                    <NavLink
                        className={(nav) => (cx('forget-password'), { active: nav.isActive })}
                        to={config.routes.forgetpassword}
                    >
                        Quên mật khẩu?
                    </NavLink>
                </section>
            )}
        </>
    );
};

export default Login;
