import React, { useContext, useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

import { DataContext } from './DataProvider';
import Colors from './Colors';
import Sizes from './Sizes';
import './Details.css';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + item.price * item.count;
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [cart]);

    const reduction = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count === 1 ? (item.count = 1) : (item.count -= 1);
            }
        });
        setCart([...cart]);
    };
    const increase = (id) => {
        cart.forEach((item) => {
            if (item._id === id) {
                item.count += 1;
            }
        });
        setCart([...cart]);
    };

    const removeProduct = (id) => {
        if (window.confirm('Do you want to delete this product?')) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            });
            setCart([...cart]);
        }
    };

    if (cart.length === 0) {
        return (
            <div className={cx('no-product')}>
                <div className={cx('no-product-text')}>không có sản phẩm nào trong giỏ hàng</div>
                <NavLink className={(nav) => cx('no-product-btn', { active: nav.isActive })} to={config.routes.shop}>
                    <button>Tiếp tục mua hàng</button>
                </NavLink>
            </div>
        );
    } else {
        return (
            <>
                {cart.map((item) => (
                    <div className={cx('details cart')} key={item._id}>
                        <div className="img-container" style={{ backgroundImage: `url(${item.images[0]})` }} />
                        {/* <img className={cx('img-container')} src={item.images[0]} alt="" /> */}
                        <div className={cx('box')}>
                            <div className={cx('row')}>
                                <h2>{item.title}</h2>
                                <span>{item.price * item.count}.000 VND</span>
                            </div>
                            <Colors colors={item.colors} />
                            <Sizes sizes={item.sizes} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <div className={cx('amount')}>
                                <button className={cx('count')} onClick={() => reduction(item._id)}>
                                    {' '}
                                    -{' '}
                                </button>
                                <span>{item.count}</span>
                                <button className={cx('count')} onClick={() => increase(item._id)}>
                                    {' '}
                                    +{' '}
                                </button>
                            </div>
                        </div>
                        <div className={cx('delete')} onClick={() => removeProduct(item._id)}>
                            X
                        </div>
                    </div>
                ))}
                <div className={cx('total')}>
                    <NavLink to={config.routes.payment}>Thanh toán</NavLink>
                    <h3>Total: {total}.000VND</h3>
                </div>
            </>
        );
    }
}
