import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import config from '~/Components/config';
import TabTitle from '~/Components/config/TabTitle';
import styles from './Cart.module.scss';
import { DataContext } from './DataProvider';
import Cookies from 'js-cookie';
import axios from 'axios';
// import './Details.css';
export default function Cart() {
    TabTitle('Giỏ hàng');
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (!auth) {
            window.location.href = 'http://localhost:3000/register';
        }
    }, [auth]);

    useEffect(() => {
        const res = cart.reduce((total, item) => {
            return total + (item.price_sale != null ? item.price_sale * item.cartNum : item.price * item.cartNum);
        }, 0);
        setTotal(res);
    }, [cart]);

    if (cart.length === 0) {
        return (
            <div className={cx('no-product')}>
                <div className={cx('no-product-text')}>không có sản phẩm nào trong giỏ hàng</div>
                <NavLink className={(nav) => cx('no-product-btn', { active: nav.isActive })} to={'/list'}>
                    <button>Tiếp tục mua hàng</button>
                </NavLink>
            </div>
        );
    } else {
        return (
            <>
                {cart?.map((item, index) => (
                    <div className={cx('details cart')} key={item.id} style={{ padding: '10px 100px' }}>
                        <div
                            className={cx('img-container')}
                            style={{ backgroundImage: `url(${item.image})`, height: '200px', width: '200px' }}
                        />

                        <div className={cx('box-details')}>
                            <div className={cx('row')}>
                                <h2>{item.name}</h2>

                                {item.price_sale != null ? (
                                    <>
                                        <del>
                                            <span style={{ fontSize: '1.4rem' }}>
                                                {item.price.toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </span>
                                        </del>
                                        <span style={{ fontSize: '1.4rem' }}>
                                            {item.price_sale.toLocaleString('it-IT', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </span>
                                    </>
                                ) : (
                                    <span style={{ fontSize: '1.4rem' }}>
                                        {item.price.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </span>
                                )}
                            </div>

                            <div className={cx('amount')}>
                                <button
                                    className={cx('count')}
                                    onClick={() => {
                                        const newCart = [...cart];
                                        if (newCart[index].cartNum > 1) newCart[index].cartNum -= 1;
                                        setCart(newCart);
                                    }}
                                >
                                    -
                                </button>
                                <span>{item.cartNum}</span>
                                <button
                                    className={cx('count')}
                                    onClick={() => {
                                        const newCart = [...cart];
                                        if (newCart[index].num > newCart[index].cartNum) newCart[index].cartNum += 1;
                                        setCart(newCart);
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    className={cx('count')}
                                    onClick={() => {
                                        setCart((prev) => prev.filter((val) => val.id !== item.id));
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={cx('total')}>
                    <NavLink to={config.routes.payment}>Thanh toán</NavLink>
                    <h3>
                        {' '}
                        Total:{' '}
                        {total.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </h3>
                </div>
            </>
        );
    }
}
