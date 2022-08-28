import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const NewUser = () => {
    const cx = classNames.bind(styles);
    const [file, setFile] = useState('');
    const userInputs = [
        {
            id: 1,
            label: 'Username',
            type: 'text',
            placeholder: 'john_doe',
        },
        {
            id: 3,
            label: 'Email',
            type: 'mail',
            placeholder: 'john_doe@gmail.com',
        },
        {
            id: 4,
            label: 'Phone',
            type: 'text',
            placeholder: '+1 234 567 89',
        },
        {
            id: 5,
            label: 'Password',
            type: 'password',
        },
        {
            id: 6,
            label: 'Address',
            type: 'text',
            placeholder: 'Elton St. 216 NewYork',
        },
    ];
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
                        <form>
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
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
