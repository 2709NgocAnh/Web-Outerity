import classNames from 'classnames/bind';
import styles from '~/admin/pages/new/NewCategory.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Data } from '~/admin/pages/Category/Category';

const EditCategory = () => {
    const cx = classNames.bind(styles);
    const { id } = useParams();
    const Category = Data.filter((userRow) => {
        return userRow.id == id;
    });

    const [focused, setFocused] = useState(false);

    const [values, setValues] = useState({
        id: Category.id,
        name: Category.name,
        status: Category.status,
    });

    useEffect(() => {
        console.log(values);
    }, [values]);

    const userInputs = [
        {
            id: 1,
            name: 'id',
            label: 'ID',
            type: 'text',
            placeholder: 'john_doe',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập tên',
            required: true,
        },
        {
            id: 2,
            name: 'name',
            label: 'Name Category',
            type: 'text',
            placeholder: 'john_doe',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập tên danh mục',
            required: true,
        },
        {
            id: 3,
            name: 'status',
            label: 'Status',
            type: 'text',
            placeholder: 'active or passive',
            pattern: '^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$',
            err: 'hãy nhập Trạng thái của danh mục',
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
        console.log(values);
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

export default EditCategory;
