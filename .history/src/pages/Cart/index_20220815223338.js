import React, { Component } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { DataContext } from '~/Components/Layout/component/Header/Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import './Details.css';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const cx = classNames.bind(styles);
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return (
                <div className={cx('no-product')}>
                    <div no-product-text>không có sản phẩm nào trong giỏ hàng</div>
                    <NavLink
                        className={(nav) => cx('no-product-btn', { active: nav.isActive })}
                        to={config.routes.shop}
                    >
                        <button>Tiếp tục thanh toán</button>
                    </NavLink>
                </div>
            );
        } else {
            return (
                <>
                    {cart.map((item) => (
                        <div className={cx('details cart')} key={item._id}>
                            <img src={item.src} alt="" />
                            <div className={cx('box')}>
                                <div className={cx('row')}>
                                    <h2>{item.title}</h2>
                                    <span>{item.price * item.count}.000 VND</span>
                                </div>
                                <Colors colors={item.colors} />
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
                        <Link to="/payment">Thanh toán</Link>
                        <h3>Total: {total}.000VND</h3>
                    </div>
                </>
            );
        }
    }
}

export default Cart;
