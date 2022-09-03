import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect } from 'react';

const NewProduct = () => {
    const cx = classNames.bind(styles);
    const [focused, setFocused] = useState(false);
    const [files, setFiles] = useState([]);
    const [desc, setDesc] = useState('');

    const [values, setValues] = useState({
        id: '',
        name: '',
        price: '',
        color: '',
        size: '',
    });

    const productInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
            err: 'hãy nhập tên sản phẩm',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            require: true,
        },
        {
            id: 2,
            name: 'id',
            label: 'ID',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
            err: 'hãy nhập tên sản phẩm',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            require: true,
        },
        {
            id: 3,
            name: 'price',
            label: 'Price',
            type: 'number',
            placeholder: 'Computers',
            pattern: '^[0-9]$',
            err: 'hãy nhập giá bán',
            require: true,
        },

        {
            id: 4,
            name: 'color',
            label: 'Price Buy',
            type: 'text',
            placeholder: 'xanh ,đỏ,vàng',
            err: 'hãy nhập màu',
            require: true,
        },
        {
            id: 5,
            name: 'size',
            label: 'Size áo',
            type: 'text',
            placeholder: 'Nhập size áo',
            err: 'hãy nhập Nhập size áo',
            require: true,
        },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleFocus = (e) => {
        setFocused(true);
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
                        <div className={cx('left-img')}>
                            <img
                                src={
                                    files.length > 0
                                        ? URL.createObjectURL(files[0])
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt=""
                            />
                        </div>

                        <div className={cx('left-footer')}>
                            {Object.values(files).map((img, index) => (
                                <img src={URL.createObjectURL(img)} alt="" key={index} />
                            ))}
                        </div>
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
                                    onChange={(e) => setFiles(e.target.files)}
                                    style={{ display: 'none' }}
                                    multiple
                                />
                            </div>

                            {productInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={onChange}
                                        required
                                        onBlur={handleFocus}
                                        focused={focused.toString()}
                                    />
                                    <span className={cx('err')}>{input.err}</span>
                                </div>
                            ))}
                            <div className={cx('formInput-desc')}>
                                <label>Description</label>
                                <textarea
                                    rows="4"
                                    cols="50"
                                    onChange={(e) => {
                                        setDesc(...e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
