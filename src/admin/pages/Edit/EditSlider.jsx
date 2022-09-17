import classNames from 'classnames/bind';
import styles from '~/admin/pages/new/NewUser.module.scss';
import axios from 'axios';
import Cookies from 'js-cookie';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../../pages/Cart/DataProvider';
const EditSlider = () => {
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const { id } = useParams();
    const [focused, setFocused] = useState(false);
    const [active, setActive] = useState(1);
    const typeActive = [
        { id: 1, type: 'Đang hoạt động', name: 'active' },
        { id: 2, type: 'Tạm dừng', name: 'active' },
    ];
    const [values, setValues] = useState({
        name: '',
        link: '',
        image: '',
    });

    const userInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Tên slide',
            type: 'text',
            /* placeholder: 'john_doe', */
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'Hãy nhập tên slider',
            required: true,
        },
        {
            id: 2,
            name: 'image',
            label: 'Link Ảnh',
            type: 'mail',
            /*   placeholder: 'john_doe@gmail.com',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$', */
            err: 'Hãy nhập link ảnh background',

            required: true,
        },
        {
            id: 3,
            name: 'link',
            label: 'Link liên kết',
            type: 'text',
            placeholder: '',
            err: 'Hãy nhập link liên kết',
            required: false,
        },
    ];
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/slider/${id}`);
            return data;
        };
        aaa()
            .then((response) => {
                setActive(response.data.slider.active);
                setValues({
                    name: response.data.slider.name,
                    link: response.data.slider.link,
                    image: response.data.slider.image,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

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
                `http://localhost:8080/tttn_be/public/api/slider/edit/${id}`,
                { ...values, active },
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
                    window.location.href = 'http://localhost:3000/sliders';
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
                    <h1>Cập nhật slider</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img
                            style={{
                                width: '340px',
                                height: '240px',
                                borderRadius: 'inherit',
                            }}
                            src={
                                values.image
                                    ? values.image
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt="ảnh slide"
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
                            {typeActive.map((input) => (
                                <div className={cx('formRadio')} key={input.id}>
                                    <input
                                        type="radio"
                                        name={input.name}
                                        onClick={(e) => setActive(input.id)}
                                        checked={active == input.id ? true : false}
                                    />
                                    <label>{input.type}</label>
                                </div>
                            ))}
                            <button className={cx('link')}>Lưu chỉnh sửa</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSlider;
