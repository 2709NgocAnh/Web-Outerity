import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '~/admin/pages/product/Product';

function SingleProduct() {
    const cx = classNames.bind(styles);
    const { id } = useParams();
    const [index, setIndex] = useState(0);
    const product = Data.filter((userRow) => {
        return userRow.id == id;
    });

    return (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <h1 className={cx('title')}>Information</h1>
                        {product.map((userRow) => {
                            return (
                                <div className={cx('item')} key={userRow.id}>
                                    <NavLink
                                        className={(nav) => cx({ active: nav.isActive })}
                                        to={`/Product/EditProduct/${userRow.id}`}
                                    >
                                        <div className={cx('editButton')}>Edit</div>
                                    </NavLink>{' '}
                                    <div className={cx('itemImg')}>
                                        <div
                                            className={cx('itemContainer')}
                                            style={{ backgroundImage: `url(${userRow.images[index]})` }}
                                        />
                                        <div className={cx('thumb')}>
                                            {userRow.images.map((img, index) => (
                                                <img src={img} alt="" key={index} onClick={() => setIndex(index)} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className={cx('details')}>
                                        <h1 className={cx('title')}>{userRow.name}</h1>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Status</span>
                                            <span className={cx(`itemValue`)}>{userRow.status}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Email</span>
                                            <span className={cx('itemValue')}>{userRow.email}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Content </span>
                                            <span className={cx('itemValue')}>{userRow.content}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
