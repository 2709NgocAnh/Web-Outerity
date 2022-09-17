import classNames from 'classnames/bind';
import styles from './EditProfileUser.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const EditProfileUser = () => {
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
                    window.location.href = `http://localhost:3000/profileuser`;
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };
    console.log(values);
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
                                    </div>

                                    <button className={cx('link')}>Cập nhật</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileUser;
