import classNames from 'classnames/bind';
import styles from './NewUser.module.scss';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { DataContext } from '../../../pages/Cart/DataProvider';
const NewUser = () => {
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [type, setType] = useState(1);
    const [address, setAddress] = useState('');
    const [focused, setFocused] = useState(false);
    const typeAdmin = [
        { id: 1, type: 'admin', name: 'type_id' },
        { id: 2, type: 'user', name: 'type_id' },
    ];
    const [values, setValues] = useState({
        name: '',
        email: '',
        avatar: '',
        phone: '',
        password: '',
        password_confirm: '',
    });

    const userInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Username',
            type: 'text',
            placeholder: 'john_doe',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập tên',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            label: 'Email',
            type: 'mail',
            placeholder: 'john_doe@gmail.com',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập đúng định dạng của mail',

            required: true,
        },
        {
            id: 3,
            name: 'avatar',
            label: 'Avatar',
            type: 'text',
            placeholder: '',
            err: 'hãy nhập link ảnh đại diện',
            required: false,
        },
        {
            id: 4,
            name: 'phone',
            label: 'Phone',
            type: 'tel',
            placeholder: '+1 234 567 89',
            pattern: '^[0-9]{10,11}$',
            err: 'hãy nhập số điện thoại',
            required: false,
        },
        {
            id: 5,
            name: 'password',
            label: 'Password',
            type: 'password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
            err: 'hãy nhập password',
            required: true,
        },
        {
            id: 6,
            name: 'password_confirm',
            label: 'Confirm password',
            type: 'password',
            reps: values.password,
            err: 'Mật khẩu không khớp',
            required: true,
        },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    const handleFocus = (e) => {
        setFocused(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/user/registeradmin',
                { ...values, address, type_id: type },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )
            .then(function (response) {
                alert(response.data.message);
                console.log(response.data.error);
                if (response.data.result) {
                    setValues({
                        name: '',
                        email: '',
                        avatar: '',
                        phone: '',
                        password: '',
                        password_confirm: '',
                    });
                    window.location.href = 'http://localhost:3000/users';
                }
            })
            .catch(function (error) {
                alert(error);
                console.log(error);
            });
    };

    return (
        <div className={cx('new')}>
            <div className={cx('newContainer')}>
                <div className={cx('top')}>
                    <h1>Thêm thành viên</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img
                            src={
                                values.avatar
                                    ? values.avatar
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt="Avatar"
                        />
                    </div>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            {userInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        {...input}
                                        pattern={input.pattern}
                                        value={values[input.name]}
                                        name={input.name}
                                        onBlur={handleFocus}
                                        onChange={(e) => {
                                            onChange(e);
                                        }}
                                        focused={focused.toString()}
                                    />
                                    <span className={cx('err')}>{input.err}</span>
                                </div>
                            ))}
                            <div className={cx('formInput-desc')}>
                                <label>Địa chỉ</label>
                                <textarea
                                    rows="2"
                                    cols="50"
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                >
                                    {address}
                                </textarea>
                            </div>
                            {typeAdmin.map((input) => (
                                <div className={cx('formRadio')} key={input.id}>
                                    <input
                                        type="radio"
                                        name={input.name}
                                        onClick={(e) => setType(input.id)}
                                        checked={input.id == type ? true : false}
                                    />
                                    <label>{input.type}</label>
                                </div>
                            ))}

                            <button className={cx('link')}>Tạo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
