import { useState } from 'react';
import classNames from 'classnames/bind';

import FormInput from '~/pages/Register/FormRegister';
import FormSign from './FormSign';
import styles from '~/pages/Register/Register.module.scss';

const cx = classNames.bind(styles);
const Register = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'firstName',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
            icon: 'fa-solid fa-user',
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Name',
            errorMessage: 'Username should be 3-16 characters ',
            label: 'lastName',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
            icon: 'fa-solid fa-user',
        },
        {
            id: 3,
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
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Mật khẩu phải bao gồm ký tự in hoa, in thường, chữ số và ký tự đặc biệt',
            label: 'Password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,10}$`,
            required: true,
            icon: 'fa-solid fa-lock',
        },
        {
            id: 5,
            name: 'confirmPassword',
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
//login
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
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
    }

    


    return (
        <div class={cx('container')}>
            {/* <form className={cx('form-signup')}>
                
                <h3 className={cx('form-heading')}>ĐĂNG NHẬP </h3>
                <FormSign icon="fa-solid fa-envelope" placeholder="Email của bạn" />
                <FormSign icon="fa-solid fa-lock" placeholder="Nhập mật khẩu" />
                <button className={cx('form-submit')}>Đăng nhập</button>
                <a href="/" className={cx('forget-password')}>
                    Quên mật khẩu?
                </a>
            </form> */}
            <FormSign/>
            <form onSubmit={handleSubmit} className={cx('form-Register')} autoComplete="off">
                <h3 className={cx('form-heading')}>ĐĂNG KÝ THÀNH VIÊN MỚI </h3>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        values={values}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className={cx('form-submit')}>Đăng ký</button>
            </form>
        </div>
    );
};

export default Register;
