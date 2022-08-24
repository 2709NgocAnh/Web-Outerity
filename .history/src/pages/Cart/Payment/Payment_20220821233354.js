import React, { useContext, useState, useEffect } from 'react';
import '../Cart.module.scss';
import './Payment.css';
import classNames from 'classnames/bind';
import { DataContext } from '../DataProvider';
import Colors from '../Colors';
import Sizes from '../Sizes';
// import '../Details.css';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Payment() {
    // const cx = classNames.bind(styles);
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

    return (
        <>
            <div className="row wrap">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div class="main">
                        <div class="main-header">
                            <a href="/" class="logo">
                                <h1 class="logo-text">Outerity</h1>
                            </a>

                            <ul class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                                        <p className="breadcrumb-item breadcrumb-item-current">Giỏ hàng</p>
                                    </NavLink>
                                </li>

                                <li class="breadcrumb-item breadcrumb-item-current">Thông tin giao hàng</li>
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
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item breadcrumb-item-current">
                                                    Bạn đã có tài khoản?
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <NavLink
                                                        className={(nav) => ({ active: nav.isActive })}
                                                        to={config.routes.register}
                                                    >
                                                        <p className="breadcrumb-item breadcrumb-item-current">
                                                            Đăng nhập
                                                        </p>
                                                    </NavLink>
                                                </li>
                                            </ul>

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
                                                            placeholder="Họ và tên"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className="field-input"
                                                            size="30"
                                                            type="text"
                                                            id="billing_address_full_name"
                                                            name="full_name"
                                                            value=""
                                                            autoComplete="false"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="field  field-two-thirds  ">
                                                    <div class="field-input-wrapper">
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
                                                            name="email"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>

                                                <div class="field field-required field-third  ">
                                                    <div class="field-input-wrapper">
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
                                                            value=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section-content">
                                            <div class="fieldset">
                                                <form
                                                    autocomplete="off"
                                                    id="form_update_shipping_method"
                                                    class="field default"
                                                    accept-charset="UTF-8"
                                                    method="post"
                                                >
                                                    {/* <input name="utf8" type="hidden" value="✓" />
                                                    <div class="content-box mt0"> */}
                                                    <div
                                                        id="form_update_location_customer_shipping"
                                                        class="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                        for="customer_pick_at_location_false"
                                                    >
                                                        <input name="utf8" type="hidden" value="✓" />

                                                        {/* <div class="field field-required  "> */}
                                                        <div class="field-input-wrapper">
                                                            <label class="field-label" for="billing_address_address1">
                                                                Địa chỉ
                                                            </label>
                                                            <input
                                                                placeholder="Địa chỉ"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                class="field-input"
                                                                size="30"
                                                                type="text"
                                                                id="billing_address_address1"
                                                                name="billing_address[address1]"
                                                                value=""
                                                            />
                                                        </div>
                                                    </div>

                                                    <input
                                                        name="selected_customer_shipping_country"
                                                        type="hidden"
                                                        value=""
                                                    />
                                                    <input
                                                        name="selected_customer_shipping_province"
                                                        type="hidden"
                                                        value=""
                                                    />
                                                    <input
                                                        name="selected_customer_shipping_district"
                                                        type="hidden"
                                                        value=""
                                                    />
                                                    <input
                                                        name="selected_customer_shipping_ward"
                                                        type="hidden"
                                                        value=""
                                                    />

                                                    <div class="field field-show-floating-label field-required field-third ">
                                                        <div class="field-input-wrapper field-input-wrapper-select">
                                                            <label class="field-label" for="customer_shipping_province">
                                                                {' '}
                                                                Tỉnh / thành{' '}
                                                            </label>
                                                            <select
                                                                class="field-input"
                                                                id="customer_shipping_district"
                                                                name="customer_shipping_district"
                                                            >
                                                                <option data-code="null" value="null" selected="">
                                                                    Chọn Tỉnh / thành{' '}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="field field-show-floating-label field-required field-third ">
                                                        <div class="field-input-wrapper field-input-wrapper-select">
                                                            <label class="field-label" for="customer_shipping_district">
                                                                Quận / huyện
                                                            </label>
                                                            <select
                                                                class="field-input"
                                                                id="customer_shipping_district"
                                                                name="customer_shipping_district"
                                                            >
                                                                <option data-code="null" value="null" selected="">
                                                                    Chọn quận / huyện
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="field field-show-floating-label field-required  field-third  ">
                                                        <div class="field-input-wrapper field-input-wrapper-select">
                                                            <label class="field-label" for="customer_shipping_ward">
                                                                Phường / xã
                                                            </label>
                                                            <select
                                                                class="field-input"
                                                                id="customer_shipping_ward"
                                                                name="customer_shipping_ward"
                                                            >
                                                                <option data-code="null" value="null" selected="">
                                                                    Chọn phường / xã
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div id="change_pick_location_or_shipping">
                                            <div id="section-payment-method" class="section">
                                                <div class="section-header">
                                                    <h2 class="section-title">Phương thức thanh toán</h2>
                                                </div>
                                                <div class="section-content">
                                                    <div class="content-box">
                                                        <div class="radio-wrapper content-box-row">
                                                            <label
                                                                class="radio-label"
                                                                for="payment_method_id_1002766550"
                                                            >
                                                                <div class="radio-input payment-method-checkbox">
                                                                    <input
                                                                        type-id="1"
                                                                        id="payment_method_id_1002766550"
                                                                        class="input-radio"
                                                                        name="payment_method_id"
                                                                        type="radio"
                                                                        value="1002766550"
                                                                        checked=""
                                                                    />
                                                                </div>
                                                                <div class="radio-content-input">
                                                                    <img
                                                                        class="main-img"
                                                                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                                                        alt=""
                                                                    />
                                                                    <div>
                                                                        <span class="radio-label-primary">
                                                                            Thanh toán khi giao hàng (COD)
                                                                        </span>
                                                                        <span class="quick-tagline hidden"></span>
                                                                        <span class="quick-tagline  hidden ">
                                                                            Buy Now, Pay Later
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
                                <div class="step-footer">
                                    <form id="form_next_step" accept-charset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" value="✓" />
                                        <button type="submit" class="step-footer-continue-btn btn">
                                            <span class="btn-content">Hoàn tất đơn hàng</span>
                                            <i class="btn-spinner icon icon-button-spinner"></i>
                                        </button>
                                    </form>
                                    <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                                        Giỏ hàng
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    {cart.map((item) => (
                        <div key={item._id}>
                            <div class="sidebar">
                                <div class="sidebar-content">
                                    <div class="order-summary order-summary-is-collapsed">
                                        <h2 class="visually-hidden">Thông tin đơn hàng</h2>
                                        <div class="order-summary-sections">
                                            <div
                                                class="order-summary-section order-summary-section-product-list"
                                                data-order-summary-section="line-items"
                                            >
                                                <table class="product-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Hình ảnh</span>
                                                            </th>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Mô tả</span>
                                                            </th>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Số lượng</span>
                                                            </th>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Giá</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="product">
                                                            <td class="product-image">
                                                                <div class="product-thumbnail">
                                                                    <div class="product-thumbnail-wrapper">
                                                                        <img
                                                                            class="product-thumbnail-image"
                                                                            alt={item.title}
                                                                            src={item.images[0]}
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        class="product-thumbnail-quantity"
                                                                        aria-hidden="true"
                                                                    >
                                                                        {item.count}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="product-description">
                                                                <span class="product-description-name order-summary-emphasis">
                                                                    {item.title}
                                                                </span>

                                                                <span class="product-description-variant order-summary-small-text">
                                                                    S
                                                                </span>
                                                            </td>
                                                            <td class="product-quantity visually-hidden">
                                                                {item.count}
                                                            </td>
                                                            <td class="product-price">
                                                                <span class="order-summary-emphasis">
                                                                    {item.price * item.count}.000 VND
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div
                                                class="order-summary-section order-summary-section-discount"
                                                data-order-summary-section="discount"
                                            >
                                                <form id="form_discount_add" accept-charset="UTF-8" method="post">
                                                    <input name="utf8" type="hidden" value="✓" />
                                                    <div class="fieldset">
                                                        <div class="field  ">
                                                            <div class="field-input-btn-wrapper">
                                                                <div class="field-input-wrapper field-two-thirds ">
                                                                    <label class="field-label" for="discount.code">
                                                                        Mã giảm giá
                                                                    </label>
                                                                    <input
                                                                        placeholder="Mã giảm giá"
                                                                        class="field-input"
                                                                        data-discount-field="true"
                                                                        autocomplete="false"
                                                                        autocapitalize="off"
                                                                        spellcheck="false"
                                                                        size="30"
                                                                        type="text"
                                                                        id="discount.code"
                                                                        name="discount.code"
                                                                        value=""
                                                                    />
                                                                </div>
                                                                <button
                                                                    type="submit"
                                                                    class="field-input-btn btn btn-default btn-disabled"
                                                                >
                                                                    <span class="btn-content field-third">Sử dụng</span>
                                                                    <i class="btn-spinner icon icon-button-spinner"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div
                                                class="order-summary-section order-summary-section-total-lines payment-lines"
                                                data-order-summary-section="payment-lines"
                                            >
                                                <table class="total-line-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Mô tả</span>
                                                            </th>
                                                            <th scope="col">
                                                                <span class="visually-hidden">Giá</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="total-line total-line-subtotal">
                                                            <td class="total-line-name">Tạm tính</td>
                                                            <td class="total-line-price">
                                                                <span
                                                                    class="order-summary-emphasis"
                                                                    data-checkout-subtotal-price-target="22500000"
                                                                >
                                                                    {item.price * item.count}.000 VND
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr class="total-line total-line-shipping">
                                                            <td class="total-line-name">Phí vận chuyển</td>
                                                            <td class="total-line-price">
                                                                <span
                                                                    class="order-summary-emphasis"
                                                                    data-checkout-total-shipping-target="0"
                                                                >
                                                                    —
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot class="total-line-table-footer">
                                                        <tr class="total-line">
                                                            <td class="total-line-name payment-due-label">
                                                                <span class="payment-due-label-total">Tổng cộng</span>
                                                            </td>
                                                            <td class="total-line-name payment-due">
                                                                <span class="payment-due-currency">VND</span>
                                                                <span
                                                                    class="payment-due-price"
                                                                    data-checkout-payment-due-target="22500000"
                                                                >
                                                                    {total}.000 VND
                                                                </span>
                                                                <span
                                                                    class="checkout_version"
                                                                    // display:none=""
                                                                    data_checkout_version="8"
                                                                ></span>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {cart.map((item) => (
                        <div className="details cart" key={item._id}>
                            <div className="img-container" style={{ backgroundImage: `url(${item.images[0]})` }} />

                            <div className="box-details">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>{item.price * item.count}.000 VND</span>
                                </div>
                                <Colors colors={item.colors} />
                                <Sizes sizes={item.sizes} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item._id)}>
                                        {' '}
                                        -{' '}
                                    </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item._id)}>
                                        {' '}
                                        +{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item._id)}>
                                X
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <NavLink to={config.routes.payment}>Thanh toán</NavLink>
                        <h3>Total: {total}.000VND</h3>
                    </div>
                </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
