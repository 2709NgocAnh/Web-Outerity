import classNames from 'classnames/bind';
import styles from './New.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect } from 'react';

const NewProduct = () => {
    const cx = classNames.bind(styles);
    const [files, setFiles] = useState([]);
    // const [errs, setErrs] = useState({

    // }

    const [values, setValues] = useState({
        name: '',
        categoty_id: '',
        description: '',
        price: 35,
        price_sale: 24,
        num: 12,
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
            err: 'hãy nhập tên sản phẩm',
            require: true,
        },
        {
            id: 2,
            name: 'price',
            label: 'Price',
            type: 'number',
            placeholder: 'Computers',
            err: 'hãy nhập giá bán',
            require: true,
        },
        // {
        //     id: 2,
        //     name: 'categoty_id',
        //     label: 'categoty_id',
        //     type: 'number',
        //     placeholder: '123',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },

        {
            id: 5,
            name: 'color',
            label: 'Price Buy',
            type: 'text',
            placeholder: 'xanh ,đỏ,vàng',
            err: 'hãy nhập màu',
            require: true,
        },
        {
            id: 6,
            name: 'size',
            label: 'Size áo',
            type: 'text',
            placeholder: 'Nhập size áo',
            err: 'hãy nhập Nhập size áo',
            require: true,
        },
        {
            id: 3,
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: 'Description',
            err: 'hãy nhập tên sản phẩm',
            require: true,
        },
        // {
        //     id: 7,
        //     name: 'num_buy',
        //     label: 'Số lượng đã bán',
        //     type: 'number',
        //     placeholder: 'Nhập Số lượng đã bán',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },
        // {
        //     id: 8,
        //     name: 'created_at',
        //     label: 'Ngày tạo',
        //     type: 'date',
        //     placeholder: '27/9/2001',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },
        // {
        //     id: 9,
        //     name: 'updated_at',
        //     label: 'Ngày cập nhật',
        //     type: 'date',
        //     placeholder: '27/9/2001',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },
        // {
        //     id: 10,
        //     name: 'created_by',
        //     label: 'Người  tạo',
        //     type: 'date',
        //     placeholder: 'Ngọc Anh',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },
        // {
        //     id: 11,
        //     name: 'updated_by',
        //     label: 'Người cập nhật',
        //     type: 'text',
        //     placeholder: 'Như Phượng',
        //     err: 'hãy nhập tên sản phẩm',
        //     require: true,
        // },
    ];
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
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
                            {/* <img
                                src={
                                    files
                                        ? URL.createObjectURL(files)
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt=""
                            /> */}
                        </div>

                        <div className={cx('left-footer')}>
                            {/* {files.map((img, index) => (
                                <img
                                    src={
                                        files
                                            ? URL.createObjectURL(img)
                                            : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                    }
                                    alt=""
                                    key={index}
                                />
                            ))} */}

                            {/* <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt=""
                            />
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt=""
                            />
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt=""
                            /> */}
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
                                    onChange={(e) => setFiles(...e.target.files)}
                                    style={{ display: 'none' }}
                                    multiple
                                />
                                {files.map((image) => {
                                    console.log(image);
                                })}
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
