import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewUser = () => {
    const cx = classNames.bind(styles);

    const [file, setFile] = useState('');
    const [type, setType] = useState();
    const [f, setF] = useState(false);
    const typeAdmin = [
        { id: 1, type: 'admin', name: 'type' },
        { id: 2, type: 'user', name: 'type' },
    ];
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
    });

    useEffect(() => {
        console.log(values);
    }, [values]);

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
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            err: 'hãy nhập đúng định dạng của mail',

            required: true,
        },
        {
            id: 3,
            name: 'phone',
            label: 'Phone',
            type: 'tel',
            placeholder: '+1 234 567 89',

            err: 'hãy nhập sôd điện thoại',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            label: 'Password',
            type: 'password',
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`,
            err: 'hãy nhập password',
            required: true,
        },
        {
            id: 5,
            name: 'address',
            label: 'Address',
            type: 'text',
            placeholder: 'Elton St. 216 NewYork',
            err: 'hãy nhập địa chỉ',
            required: true,
        },
        // {
        //     id: 7,
        //     name: 'type',
        //     label: 'Type',
        //     type: 'radio',

        // },
        // {
        //     id: 8,
        //     name: 'buy',
        //     label: 'Giá mua',
        //     type: 'number',
        //     placeholder: 'Nhập giá mua',
        // },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    // useEffect(() => {
    //     setCheck(pattern && new RegExp(`${pattern}`).test(value));
    // }, [values]);

    // useEffect(() => {
    //     if (values.sell < values.buy) {
    //         alert('mua phải > bán');
    //     }
    // }, [values]);

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
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('formInput')}>
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className={cx('icon')} />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                            </div>

                            {userInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={(e) => {
                                            onChange(e);
                                            setF(true);
                                        }}
                                        {...userInputs}
                                        pattern={input.pattern}
                                        value={values[input.name]}
                                        name={input.name}
                                    />
                                    <span>{input.err}</span>
                                    {/* {!(pattern && new RegExp(`${pattern}`).test(value)) && f && (
                                        
                                    )} */}
                                </div>
                            ))}

                            {typeAdmin.map((input) => (
                                <div className={cx('formRadio')} key={input.id}>
                                    <input type="radio" name={input.name} onClick={(e) => setType(e.target.value)} />
                                    <label>{input.type}</label>
                                </div>
                            ))}

                            <Link to="/users" className={cx('link')}>
                                <button>Send</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
