import classNames from 'classnames/bind';
import styles from './EditUser.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const EditUser = () => {
    const cx = classNames.bind(styles);
    const [type, setType] = useState();
    const [focused, setFocused] = useState(false);
    const { id } = useParams();
    const [address, setAddress] = useState();
    const [values, setValues] = useState({
        email: '',
        name: '',
        phone: '',
        avatar: '',
    });
    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })

            .then((response) => {
                setValues({
                    email: response.data.user.email,
                    name: response.data.user.name,
                    phone: response.data.user.phone,
                    avatar: response.data.user.avatar,
                });
                setType(response.data.user.type_id);
                setAddress(response.data.user.address);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    const typeAdmin = [
        { id: 1, type: 'admin', name: 'type' },
        { id: 2, type: 'user', name: 'type' },
    ];

    const userInputs = [
        {
            id: 1,
            name: 'email',
            label: 'Email',
            type: 'email',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            err: 'hãy nhập đúng định dạng của mail',
            required: true,
            readOnly: true,
        },
        {
            id: 2,
            name: 'name',
            label: 'Họ và tên',
            type: 'text',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập tên',
            required: true,
        },
        {
            id: 3,
            name: 'avatar',
            label: 'Link ảnh đại diện',
            type: 'text',
            /*  pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$', */
            err: 'hãy nhập link ảnh đại diện',
            required: true,
        },
        {
            id: 4,
            name: 'phone',
            label: 'Số điện thoại',
            type: 'tel',
            pattern: '^[0-9]{10,11}$',
            err: 'hãy nhập số điện thoại',
            required: true,
        },
        // {
        //     id: 4,
        //     name: 'password',
        //     label: 'Password',
        //     type: 'password',
        //     pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
        //     err: 'hãy nhập password',
        //     required: true,
        // },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:8080/tttn_be/public/api/user/edit/${id}`,
                { ...values, address, type_id: type },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )
            .then(function (response) {
                console.log(response.data.error);
                if (response.data.result) {
                    alert(response.data.message);
                    window.location.href = `http://localhost:3000/users/${id}`;
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };

    return (
        <div className={cx('new')}>
            <div className={cx('newContainer')}>
                <div className={cx('top')}>
                    <h1>Cập nhập thông tin tài khoản</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img
                            src={
                                values.avatar != null
                                    ? values.avatar
                                    : 'http://ativn.edu.vn/wp-content/uploads/2018/03/user-male-icon-300x300.png'
                            }
                            alt="Ảnh đại diện"
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
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />

                                {console.log(address)}
                            </div>
                            {typeAdmin.map((input) => (
                                <div className={cx('formRadio')} key={input.id}>
                                    <input
                                        type="radio"
                                        value={input.id}
                                        name={input.name}
                                        onClick={(e) => setType(e.target.value)}
                                        checked={type == input.id ? true : false}
                                    />
                                    <label>{input.type}</label>
                                </div>
                            ))}

                            <button className={cx('link')}>Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
