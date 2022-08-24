import React, { useContext, useState, useEffect } from 'react';
import styles from './Payment.module.css';
import classNames from 'classnames/bind';
import { DataContext } from '../DataProvider';
import Colors from '../Colors';
import Sizes from '../Sizes';
import '../Details.css';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';

export default function Payment() {
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

    return (
        <>
            <div className={cx('row')}>
                <div class={cx('col-md-6 col-sm-12 col-xs-12')}>
                    <div class={cx('section-content section-customer-information no-mb')}>
                        <p class={cx('section-content-text')}>
                            Bạn đã có tài khoản?
                            <a href="/account/login?urlredirect=%2Fcheckouts%2F00d70e6b7e3441f79642af5b2a725e29%3Fstep%3D1">
                                Đăng nhập
                            </a>
                        </p>

                        <div class="fieldset">
                            <div class="field field-required  ">
                                <div class="field-input-wrapper">
                                    <label class="field-label" for="billing_address_full_name">
                                        Họ và tên
                                    </label>
                                    <input
                                        placeholder="Họ và tên"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        class="field-input"
                                        size="30"
                                        type="text"
                                        id="billing_address_full_name"
                                        name="billing_address[full_name]"
                                        value=""
                                        autocomplete="false"
                                    />
                                </div>
                            </div>

                            <div class="field  field-two-thirds  ">
                                <div class="field-input-wrapper">
                                    <label class="field-label" for="checkout_user_email">
                                        Email
                                    </label>
                                    <input
                                        autocomplete="false"
                                        placeholder="Email"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        class="field-input"
                                        size="30"
                                        type="email"
                                        id="checkout_user_email"
                                        name="checkout_user[email]"
                                        value=""
                                    />
                                </div>
                            </div>

                            <div class="field field-required field-third  ">
                                <div class="field-input-wrapper">
                                    <label class="field-label" for="billing_address_phone">
                                        Số điện thoại
                                    </label>
                                    <input
                                        autocomplete="false"
                                        placeholder="Số điện thoại"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        class="field-input"
                                        size="30"
                                        maxlength="15"
                                        type="tel"
                                        id="billing_address_phone"
                                        name="billing_address[phone]"
                                        value=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    {cart.map((item) => (
                        <div className={cx('details cart')} key={item._id}>
                            <div
                                className={cx('img-container')}
                                style={{ backgroundImage: `url(${item.images[0]})` }}
                            />

                            <div className={cx('box-details')}>
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
                </div>
            </div>
        </>
    );
}
