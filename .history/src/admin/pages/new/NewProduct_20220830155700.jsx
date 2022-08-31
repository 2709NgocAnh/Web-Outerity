import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect } from 'react';

const NewProduct = () => {
    const cx = classNames.bind(styles);
    const [file, setFile] = useState('');
    const [values, setValues] = useState({
        name: '',
        categoty_id: '',
        description: '',
        price: 35,
        price_sale: 24,
        num: 12,
        num_buy: 10,
        created_at: 24 / 12 / 2022,
        updated_at: 25 / 12 / 2022,
        created_by: 'ngoc anh',
        updated_by: 'ngoc anh',
    });

    const productInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
        },
        {
            id: 2,
            name: 'categoty_id',
            label: 'categoty_id',
            type: 'number',
            placeholder: '123',
        },
        {
            id: 3,
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: 'Description',
        },
        {
            id: 4,
            name: 'price',
            label: 'price',
            type: 'number',
            placeholder: 'Computers',
        },
        {
            id: 5,
            name: 'price_buy',
            label: 'Price Buy',
            type: 'number',
            placeholder: '100',
        },
        {
            id: 5,
            name: 'stock',
            label: 'Stock',
            type: 'text',
            placeholder: 'in stock',
        },
        {
            id: 7,
            name: 'num',
            label: 'Số lượng',
            type: 'number',
            placeholder: 'Nhập Số lượng',
        },
        {
            id: 8,
            name: 'num_buy',
            label: 'Số lượng đã bán',
            type: 'number',
            placeholder: 'Nhập Số lượng đã bán',
        },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.warn(setValues);
    };

    useEffect(() => {
        if (values.sell < values.buy) {
            alert('mua phải > bán');
        }
    }, [values]);
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
                                    <input type={input.type} placeholder={input.placeholder} onChange={onChange} />
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
