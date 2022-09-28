import classNames from 'classnames/bind';
import styles from './NewCategory.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const NewCategory = () => {
    const cx = classNames.bind(styles);

    const [focused, setFocused] = useState(false);
    const [name, setName] = useState('');
    const [active, setActive] = useState(1);

    const arrActive = [
        { id: 1, type: 'Đang hoạt động', name: 'active' },
        { id: 2, type: 'Tạm dừng', name: 'active' },
    ];
    const userInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Tên danh mục',
            type: 'text',
            placeholder: 'Quần, áo',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'Hãy nhập tên danh mục',
            required: true,
        },
    ];
    const onChange = (e) => {
        setName(e.target.value);
    };
    const handleFocus = (e) => {
        setFocused(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/category/add',
                { name, active },
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
                    setName('');
                    window.location.href = 'http://localhost:3000/categorys';
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
                    <h1>Thêm Danh mục</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            {userInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        {...input}
                                        pattern={input.pattern}
                                        value={name}
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
                            {arrActive.map((input) => (
                                <div className={cx('formRadio')} key={input.id}>
                                    <input
                                        type="radio"
                                        name={input.name}
                                        onClick={(e) => setActive(input.id)}
                                        checked={input.id == active ? true : false}
                                    />
                                    <label>{input.type}</label>
                                </div>
                            ))}
                            <button className={cx('link')}>Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCategory;
