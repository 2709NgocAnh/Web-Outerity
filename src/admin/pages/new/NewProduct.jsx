import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const NewProduct = () => {
    const cx = classNames.bind(styles);
    const [file, setFile] = useState('');
    const productInputs = [
        {
            id: 1,
            label: 'Title',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
        },
        {
            id: 2,
            label: 'Description',
            type: 'text',
            placeholder: 'Description',
        },
        {
            id: 3,
            label: 'Category',
            type: 'text',
            placeholder: 'Computers',
        },
        {
            id: 4,
            label: 'Price',
            type: 'text',
            placeholder: '100',
        },
        {
            id: 5,
            label: 'Stock',
            type: 'text',
            placeholder: 'in stock',
        },
    ];
    return (
        <div className={cx('new')}>
            <div className={cx('newContainer')}>
                <div className={cx('top')}>
                    <h1>Thêm Sản Phẩm</h1>
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

                            {productInputs.map((input) => (
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

export default NewProduct;
