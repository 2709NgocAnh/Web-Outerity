import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import classNames from 'className/bind';
import './Payment.scss';
// import '../Cart.module.scss';
import { DataContext } from '../DataProvider';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';
import TabTitle from '~/Components/config/TabTitle';
export default function Payment() {
    TabTitle('Thanh toán');
    // const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [err3, setErr3] = useState('');
    const [err4, setErr4] = useState('');

    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);
    const [f3, setF3] = useState(false);
    const [f4, setF4] = useState(false);

    const [cart] = value.cart;
    const [total, setTotal] = useState(0);
    const [priceall, setPriceall] = useState(0);
    const [priceShip, setPriceShip] = useState(30000);
    const [auth, setAuth] = useState(true);
    const [profile, setProfile] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
                setAddress(response.data.user.address);
                setEmail(response.data.user.email);
                setPhone(response.data.user.phone);
                setFullname(response.data.user.name);
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
        setPriceall(total + 30000);
    }, [total]);
    useEffect(() => {
        if (fullname === '' && f1) {
            setErr1('Hãy nhập họ và tên');
        } else {
            setErr1('');
        }
    }, [f1, fullname]);
    useEffect(() => {
        if (phone === '' && f2) {
            setErr2('Hãy nhập số điện thoại');
        }
    }, [f2, phone]);
    useEffect(() => {
        if (address === '' && f3) {
            setErr3('Hãy nhập địa chỉ');
        }
    }, [address, f3]);
    useEffect(() => {
        if (email === '' && f4) {
            setErr4('Hãy nhập email');
        }
    }, [email, f4]);
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((total, item) => {
                return total + item.price_sale * item.cartNum;
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [cart]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('huhu');
        axios
            .post(
                'http://localhost:8080/tttn_be/public/api/order/add',
                {
                    email,
                    note,
                    address,
                    phone,
                    fullname,
                    cart,
                    price_al: priceall,
                    price_product: total,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                },
            )

            .then(function (response) {
                if (response.data.result) {
                    alert(response.data.message);
                    localStorage.removeItem('cart');
                    window.location.href = 'http://localhost:3000/list';
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });
    };
    return (
        <>
            <div className="row wrap">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="main">
                        <div className="main-header">
                            <a href="/list" className="logo">
                                <h1 className="logo-text">Outerity</h1>
                            </a>

                            <ul className="breadcrumb">
                                <li className="breadcrumb-item breadcrumb-item-current">
                                    <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                                        Giỏ hàng
                                    </NavLink>
                                </li>

                                <li className="breadcrumb-item breadcrumb-item-current">Thông tin giao hàng</li>
                            </ul>
                        </div>
                        <div className="main-content">
                            <div className="step">
                                <div className="step-sections steps-onepage" step="1">
                                    <div className="section">
                                        <div className="section-header">
                                            <h2 className="section-title">Thông tin giao hàng</h2>
                                        </div>
                                        <div className="section-content section-customer-information no-mb">
                                            <div className="fieldset">
                                                <div className="field field-required  ">
                                                    <div className="field-input-wrapper">
                                                        <label
                                                            className="field-label"
                                                            htmlFor="billing_address_full_name"
                                                        >
                                                            Họ và tên
                                                        </label>
                                                        <input
                                                            className="field-input"
                                                            placeholder="Họ và tên"
                                                            type="text"
                                                            required
                                                            onChange={(e) => {
                                                                setFullname(e.target.value);
                                                                setF1(true);
                                                            }}
                                                            value={fullname}
                                                        />
                                                        <span>{err1}</span>
                                                    </div>
                                                </div>

                                                <div className="field  field-two-thirds  ">
                                                    <div className="field-input-wrapper">
                                                        <label className="field-label" htmlFor="checkout_user_email">
                                                            Email
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Email"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            type="email"
                                                            id="checkout_user_email"
                                                            required
                                                            name="email"
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                                setF4(true);
                                                            }}
                                                            value={email}
                                                        />
                                                        <span>{err4}</span>
                                                    </div>
                                                </div>

                                                <div className="field field-required field-third  ">
                                                    <div className="field-input-wrapper">
                                                        <label className="field-label" htmlFor="billing_address_phone">
                                                            Số điện thoại
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Số điện thoại"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            maxLength="15"
                                                            type="tel"
                                                            id="billing_address_phone"
                                                            name="phone"
                                                            onChange={(e) => {
                                                                setPhone(e.target.value);
                                                                setF2(true);
                                                            }}
                                                            value={phone}
                                                        />
                                                        <span>{err2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-content">
                                            <div className="fieldset">
                                                <form
                                                    onSubmit={handleSubmit}
                                                    autocomplete="off"
                                                    id="form_update_shipping_method"
                                                    className="field default"
                                                    accept-charset="UTF-8"
                                                >
                                                    <div
                                                        id="form_update_location_customer_shipping"
                                                        className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                        for="customer_pick_at_location_false"
                                                    >
                                                        <div className="field-input-wrapper">
                                                            <label
                                                                className="field-label"
                                                                for="billing_address_address1"
                                                            >
                                                                Địa chỉ
                                                            </label>
                                                            <input
                                                                placeholder="Địa chỉ"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                className="field-input"
                                                                size="30"
                                                                type="text"
                                                                id="billing_address_address1"
                                                                name="billing_address[address1]"
                                                                onChange={(e) => {
                                                                    setAddress(e.target.value);
                                                                    setF3(true);
                                                                }}
                                                                value={address}
                                                            />
                                                            <span>{err3}</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="form_update_location_customer_shipping"
                                                        className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                        for="customer_pick_at_location_false"
                                                    >
                                                        <div className="field-input-wrapper">
                                                            <label
                                                                className="field-label"
                                                                for="billing_address_address1"
                                                            >
                                                                Chú Thích
                                                            </label>
                                                            <textarea
                                                                placeholder="Chú thích"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                className="field-input"
                                                                size="30"
                                                                type="text"
                                                                id="billing_address_address1"
                                                                name="billing_address[address1]"
                                                                onChange={(e) => {
                                                                    setNote(e.target.value);
                                                                }}
                                                                value={note}
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div id="change_pick_location_or_shipping">
                                            <div id="section-payment-method" className="section">
                                                <div className="section-header">
                                                    <h2 className="section-title">Phương thức thanh toán</h2>
                                                </div>
                                                <div className="section-content">
                                                    <div className="content-box">
                                                        <div className="radio-wrapper content-box-row">
                                                            <label
                                                                className="radio-label"
                                                                for="payment_method_id_1002766550"
                                                            >
                                                                <div className="radio-input payment-method-checkbox">
                                                                    <input
                                                                        type-id="1"
                                                                        id="payment_method_id_1002766550"
                                                                        className="input-radio"
                                                                        name="payment_method_id"
                                                                        type="radio"
                                                                        value="1002766550"
                                                                        checked=""
                                                                    />
                                                                </div>
                                                                <div className="radio-content-input">
                                                                    <img
                                                                        className="main-img"
                                                                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                                                        alt=""
                                                                    />
                                                                    <div>
                                                                        <span className="radio-label-primary">
                                                                            Thanh toán khi giao hàng (COD)
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="step-footer">
                                    <div id="form_next_step" accept-charset="UTF-8">
                                        <button onClick={handleSubmit} className="step-footer-continue-btn btn">
                                            <span className="btn-content">Hoàn tất đơn hàng</span>
                                            <i className="btn-spinner icon icon-button-spinner"></i>
                                        </button>
                                    </div>
                                    <NavLink to={config.routes.cart}>Giỏ hàng</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className="sidebar">
                                <div className="sidebar-content">
                                    <div className="order-summary order-summary-is-collapsed">
                                        <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                                        <div className="order-summary-sections">
                                            <div
                                                className="order-summary-section order-summary-section-product-list"
                                                data-order-summary-section="line-items"
                                            >
                                                <table className="product-table">
                                                    <tbody>
                                                        <tr className="product">
                                                            <td className="product-image">
                                                                <div className="product-thumbnail">
                                                                    <div className="product-thumbnail-wrapper">
                                                                        <img
                                                                            className="product-thumbnail-image"
                                                                            alt={item.name}
                                                                            src={item.image}
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        className="product-thumbnail-quantity"
                                                                        aria-hidden="true"
                                                                    >
                                                                        {item.cartNum}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="product-description">
                                                                <span className="product-description-name order-summary-emphasis">
                                                                    {item.name}
                                                                </span>
                                                                {item.price_sale != null ? (
                                                                    <>
                                                                        <del>
                                                                            <span className="product-description-name order-summary-emphasis">
                                                                                {item.price.toLocaleString('it-IT', {
                                                                                    style: 'currency',
                                                                                    currency: 'VND',
                                                                                })}
                                                                            </span>
                                                                        </del>
                                                                        <span className="product-description-name order-summary-emphasis">
                                                                            {item.price_sale.toLocaleString('it-IT', {
                                                                                style: 'currency',
                                                                                currency: 'VND',
                                                                            })}
                                                                        </span>
                                                                    </>
                                                                ) : (
                                                                    <span className="product-description-name order-summary-emphasis">
                                                                        {item.price.toLocaleString('it-IT', {
                                                                            style: 'currency',
                                                                            currency: 'VND',
                                                                        })}
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="product-quantity visually-hidden">
                                                                {item.cartNum}
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="order-summary-emphasis">
                                                                    {(item.price_sale * item.cartNum).toLocaleString(
                                                                        'it-IT',
                                                                        {
                                                                            style: 'currency',
                                                                            currency: 'VND',
                                                                        },
                                                                    )}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="sidebar ">
                        <div className="sidebar-content">
                            <div
                                className="order-summary-section order-summary-section-total-lines payment-lines"
                                data-order-summary-section="payment-lines"
                            >
                                <table className="total-line-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span className="visually-hidden">Mô tả</span>
                                            </th>
                                            <th scope="col">
                                                <span className="visually-hidden">Giá</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-line total-line-subtotal">
                                            <td className="total-line-name">Tạm tính</td>
                                            <td className="total-line-price">
                                                <span className="order-summary-emphasis">
                                                    {' '}
                                                    {total.toLocaleString('it-IT', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr className="total-line total-line-shipping">
                                            <td className="total-line-name">Phí vận chuyển</td>
                                            <td className="total-line-price">
                                                <span
                                                    className="order-summary-emphasis"
                                                    data-checkout-total-shipping-target="0"
                                                >
                                                    {priceShip.toLocaleString('it-IT', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="total-line-table-footer">
                                        <tr className="total-line">
                                            <td className="total-line-name payment-due-label">
                                                <strong className="payment-due-label-total">Tổng cộng</strong>
                                            </td>
                                            <td className="total-line-name payment-due">
                                                <span
                                                    className="payment-due-price"
                                                    data-checkout-payment-due-target="22500000"
                                                >
                                                    {priceall.toLocaleString('it-IT', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </span>
                                                <span className="checkout_version" data_checkout_version="8"></span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
