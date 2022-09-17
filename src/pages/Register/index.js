import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import FormRegister from '~/pages/Register/FormRegister';
import FormSign from './FormSign';
import styles from '~/pages/Register/Register.module.scss';
import TabTitle from '~/Components/config/TabTitle';
import axios from 'axios';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
const Register = () => {
    TabTitle('Register');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (auth) {
            window.location.href = 'http://localhost:3000/list';
        }
    }, [auth]);

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        password_confirm: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Tên người dùng phải từ 3-16 ký tự! ',
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
            errorMessage: 'Phải là một địa chỉ email hợp lệ!',
            label: 'Email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
            icon: 'fa-solid fa-envelope',
        },
        {
            id: 3,
            name: 'phone',
            type: 'tel',
            placeholder: 'Số điện thoại',
            errorMessage: 'Phải là số điện thoại hợp lệ!',
            label: 'Số điện thoại',
            pattern: '^[0-9]{10,11}$',
            required: true,
            icon: 'fa-solid fa-phone',
        },
        {
            id: 4,
            name: 'address',
            type: 'text',
            placeholder: 'Địa chỉ',
            errorMessage: 'Phải nhập địa chỉ!',
            label: 'Địa chỉ',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            required: true,
            icon: 'fa-solid fa-location-dot',
        },
        {
            id: 5,
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
            id: 6,
            name: 'password_confirm',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Mật khẩu không khớp!',
            label: 'Confirm Password',
            reps: values.password,
            required: true,
            icon: 'fa-solid fa-lock',
        },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post('http://localhost:8080/tttn_be/public/api/user/register', { ...values, type_id: 2 })
            .then(function (response) {
                alert(response.data.message);
                if (response.data.result) {
                    setValues({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        password: '',
                        password_confirm: '',
                    });
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };

    return (
        <div class={cx('container')}>
            <FormSign />
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
        </div>
    );
};

export default Register;
