import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const NewProduct = () => {
    const cx = classNames.bind(styles);
    const [focused, setFocused] = useState(false);

    const [content, setContent] = useState('');
    const [categoryid, setCategoryid] = useState(0);
    const [active, setActive] = useState(1);
    const [listimage, setListimage] = useState(['', '', '', '']);
    const [listcategory, setListcategory] = useState([]);

    const arrActive = [
        { id: 1, type: 'Đang hoạt động', name: 'active' },
        { id: 2, type: 'Tạm dừng', name: 'active' },
    ];
    const [values, setValues] = useState({
        name: '',
        price: '',
        price_sale: '',
        image: '',
        num: '',
    });

    const productInputs = [
        {
            id: 1,
            name: 'name',
            label: 'Tên sản phẩm',
            type: 'text',
            placeholder: 'Apple Macbook Pro',
            err: 'hãy nhập tên sản phẩm',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            require: true,
        },
        {
            id: 2,
            name: 'num',
            label: 'Số lượng',
            type: 'number',
            pattern: '^[1-9][0-9]*$',
            // placeholder: 'xanh ,đỏ,vàng',
            err: 'hãy nhập số lượng sản phẩm',
            require: true,
        },

        {
            id: 3,
            name: 'price',
            label: 'Giá gốc',
            type: 'number',
            //placeholder: 'Computers',
            pattern: '^[0-9]$',
            err: 'hãy nhập giá gốc',
            require: true,
        },
        {
            id: 4,
            name: 'price_sale',
            label: 'Giá sale',
            type: 'number',
            // placeholder: 'Computers',
            pattern: '^[0-9]$',
            err: 'hãy nhập giá khuyến mãi',
            require: false,
        },
        {
            id: 5,
            name: 'image',
            label: 'Ảnh sản phẩm (ảnh chính)',
            type: 'text',
            // placeholder: 'Apple Macbook Pro',
            err: 'hãy nhập ảnh sản phẩm',
            // pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            require: true,
        },
    ];
    const productImage = [
        {
            id: 1,
            name: 'image1',
            label: 'Ảnh chi tiết 1',
            type: 'text',
            /* placeholder: 'Apple Macbook Pro', */
            err: 'hãy nhập link ảnh chi tiết 1',
            //pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            require: true,
        },
        {
            id: 2,
            name: 'image2',
            label: 'Ảnh chi tiết 2',
            type: 'text',
            //pattern: '^[0-9]$',
            // placeholder: 'xanh ,đỏ,vàng',
            err: 'hãy nhập link ảnh chi tiết 2',
            require: true,
        },

        {
            id: 3,
            name: 'image3',
            label: 'Ảnh chi tiết 3',
            type: 'text',
            //placeholder: 'Computers',
            // pattern: '^[0-9]$',
            err: 'hãy nhập link ảnh chi tiết 3',
            require: true,
        },
        {
            id: 4,
            name: 'image4',
            label: 'Ảnh chi tiết 4',
            type: 'text',
            // placeholder: 'Computers',
            //pattern: '^[0-9]$',
            err: 'hãy nhập link ảnh chi tiết 4',
            require: true,
        },
    ];
    const onChangeInputs = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    /*  const onChangelistImage = (e) => {
        listimage[e.target.id] = e.target.value;
        setListimage(listimage);
        console.log(listimage);
    }; */
    const handleFocus = (e) => {
        setFocused(true);
    };
    useEffect(() => {
        if (values.price_sale > values.price) {
            alert('Giá bán khuyến mãi phẻ nhỏ hơn giá gốc ');
        }
    }, [values]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/tttn_be/public/api/category/listactive', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then(function (response) {
                console.log(response.data.error);
                if (response.data.result) {
                    setListcategory(response.data.category);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('categoryid', categoryid);
        console.log('content', content);
        console.log('values', values);
        console.log('active', active);
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/product/add',
                { ...values, active, content, category_id: categoryid, listimage },
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
                    window.location.href = 'http://localhost:3000/products';
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
                    <h1>Thêm Sản Phẩm</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <div className={cx('left-img')}>
                            <img
                                src={
                                    values.image
                                        ? values.image
                                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                }
                                alt="ảnh sản phẩm"
                            />
                        </div>

                        <div className={cx('left-footer')}>
                            {listimage.map((img, index) => (
                                <img
                                    src={
                                        img ? img : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                                    }
                                    alt="ảnh"
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            {productInputs.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        name={input.name}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={(e) => {
                                            onChangeInputs(e);
                                        }}
                                        required={input.require}
                                        onBlur={handleFocus}
                                        focused={focused.toString()}
                                        value={values[input.name]}
                                    />
                                    <span className={cx('err')}>{input.err}</span>
                                </div>
                            ))}
                            <div className={cx('formInput-category')}>
                                <label>Danh mục sản phẩm</label>
                                <select
                                    required
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        setCategoryid(e.target.value);
                                    }}
                                >
                                    <option value="">Chọn danh mục sản phẩm</option>
                                    {listcategory.map((category) => (
                                        <option value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            {productImage.map((input) => (
                                <div className={cx('formInput')} key={input.id}>
                                    <label for={input.id - 1}>{input.label}</label>
                                    <input
                                        id={input.id - 1}
                                        type={input.type}
                                        onChange={(e) => {
                                            listimage[e.target.id] = e.target.value;
                                            setListimage(listimage);
                                            console.log(listimage);
                                        }}
                                        required
                                        onBlur={handleFocus}
                                        focused={focused.toString()}
                                        value={listimage[input.id - 1]}
                                    />
                                </div>
                            ))}

                            <div className={cx('formInput-content')}>
                                <label>Nội dung</label>
                                <textarea
                                    required
                                    rows="4"
                                    cols="50"
                                    onChange={(e) => {
                                        setContent(e.target.value);
                                    }}
                                ></textarea>
                            </div>

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
                            <button>Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
