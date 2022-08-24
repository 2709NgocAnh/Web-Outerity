import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from '../api/axios';

import FormRegister from '~/pages/Register/FormRegister';

import TabTitle from '~/Components/config/TabTitle';
const LOGIN_URL = '/auth';
const cx = classNames.bind(styles);

const ForgetPassword = () => {
    TabTitle('Quên mật khẩu');
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

    const handleSubmitOn = async (e) => {
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
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirm: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'Username',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            required: true,
            icon: 'fa-solid fa-user',
        },

        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
            icon: 'fa-solid fa-envelope',
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Mật khẩu phải bao gồm ký tự in hoa, in thường, chữ số và ký tự đặc biệt',
            label: 'Password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
            required: true,
            icon: 'fa-solid fa-lock',
        },
        {
            id: 4,
            name: 'password_confirm',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            label: 'Confirm Password',
            reps: values.password,
            required: true,
            icon: 'fa-solid fa-lock',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
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
                <>
                    <section>
                        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                            {errMsg}
                        </p>
                        <h3 className={cx('form-heading')}>ĐĂNG NHẬP </h3>
                        <form onSubmit={handleSubmitOn} className={cx('form-signup')}>
                            <div>
                                <i class="fa-solid fa-rotate"></i>
                                <p>Quên mật khẩu</p>
                            </div>
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

                            <button className={cx('form-submit')}>Gửi</button>
                        </form>
                        <a href="/register" className={cx('forget-password')}>
                            Hủy?
                        </a>
                    </section>

                    <form onSubmit={handleSubmit} className={cx('form-Register')} autoComplete="off">
                        <h3 className={cx('form-heading')}>ĐĂNG KÝ THÀNH VIÊN MỚI </h3>
                        {inputs.map((input) => (
                            <FormRegister
                                key={input.id}
                                {...input}
                                values={values}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}

                        <button className={cx('form-submit')}>Đăng ký</button>
                    </form>
                </>
            )}
        </>
    );
};

export default ForgetPassword;
