import React, { useContext, useState, useEffect } from 'react';
import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
// import '../Cart.module.scss';
import { DataContext } from '~/pages/Cart/DataProvider';
import config from '~/Components/config';
import { NavLink } from 'react-router-dom';
import TabTitle from '~/Components/config/TabTitle';
export default function Payment() {
    TabTitle('Payment');
    const cx = classNames.bind(styles);
    const value = useContext(DataContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [err3, setErr3] = useState('');

    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);
    const [f3, setF3] = useState(false);

    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // lúc đầu
        // name === "" : true
        // f1: fasle
        if (name === '' && f1) {
            setErr1('Hãy nhập họ và tên');
        } else {
            setErr1('');
        }
    }, [f1, name]);
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
            <div className={cx('row wrap')}>
                <div className={cx('col-md-6 col-sm-12 col-xs-12')}>
                    <div className={cx('main')}>
                        <div className={cx('main-header')}>
                            <a href="/" className={cx('logo')}>
                                <h1 className={cx('logo-text')}>Outerity</h1>
                            </a>

                            <ul className={cx('breadcrumb')}>
                                <li className={cx('breadcrumb-item breadcrumb-item-current')}>
                                    <NavLink className={(nav) => ({ active: nav.isActive })} to={config.routes.cart}>
                                        Giỏ hàng
                                    </NavLink>
                                </li>

                                <li className={cx('breadcrumb-item breadcrumb-item-current')}>Thông tin giao hàng</li>
                            </ul>
                        </div>
                        <div className={cx('main-content')}>
                            <div className={cx('step')}>
                                <div className={cx('step-sections steps-onepage')} step="1">
                                    <div className={cx('section')}>
                                        <div className={cx('section-header')}>
                                            <h2 className={cx('section-title')}>Thông tin giao hàng</h2>
                                        </div>
                                        <div className={cx('section-content section-customer-information no-mb')}>
                                            <ul className={cx('breadcrumb')}>
                                                <li className={cx('breadcrumb-item breadcrumb-item-current')}>
                                                    Bạn đã có tài khoản?
                                                </li>
                                                <li className={cx('breadcrumb-item breadcrumb-item-current')}>
                                                    <NavLink
                                                        className={cx((nav) => ({ active: nav.isActive }))}
                                                        to={config.routes.register}
                                                    >
                                                        Đăng nhập
                                                    </NavLink>
                                                </li>
                                            </ul>

                                            <div className={cx('fieldset')}>
                                                <div className={cx('field field-required  ')}>
                                                    <div className={cx('field-input-wrapper')}>
                                                        <label
                                                            className={cx('field-label')}
                                                            htmlFor="billing_address_full_name"
                                                        >
                                                            Họ và tên
                                                        </label>
                                                        <input
                                                            className={cx('field-input')}
                                                            placeholder="Họ và tên"
                                                            type="text"
                                                            required
                                                            onChange={(e) => {
                                                                setName(e.target.value);
                                                                setF1(true);
                                                            }}
                                                            value={name}
                                                        />
                                                        <span>{err1}</span>
                                                    </div>
                                                </div>

                                                <div className={cx('field  field-two-thirds  ')}>
                                                    <div className={cx('field-input-wrapper')}>
                                                        <label
                                                            className={cx('field-label')}
                                                            htmlFor="checkout_user_email"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Email"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className={cx('field-input')}
                                                            size="30"
                                                            type="email"
                                                            id="checkout_user_email"
                                                            name="email"
                                                        />
                                                    </div>
                                                </div>

                                                <div className={cx('field field-required field-third  ')}>
                                                    <div className={cx('field-input-wrapper')}>
                                                        <label
                                                            className={cx('field-label')}
                                                            htmlFor="billing_address_phone"
                                                        >
                                                            Số điện thoại
                                                        </label>
                                                        <input
                                                            autoComplete="false"
                                                            placeholder="Số điện thoại"
                                                            autoCapitalize="off"
                                                            spellCheck="false"
                                                            className={cx('field-input')}
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
                                        <div className={cx('section-content')}>
                                            <div className={cx('fieldset')}>
                                                <form
                                                    autocomplete="off"
                                                    id="form_update_shipping_method"
                                                    className={cx('field default')}
                                                    accept-charset="UTF-8"
                                                    method="post"
                                                >
                                                    <div
                                                        id="form_update_location_customer_shipping"
                                                        className={cx(
                                                            'order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary ',
                                                        )}
                                                        for="customer_pick_at_location_false"
                                                    >
                                                        <input name="utf8" type="hidden" value="✓" />
                                                        <div className={cx('field-input-wrapper')}>
                                                            <label
                                                                className={cx('field-label')}
                                                                for="billing_address_address1"
                                                            >
                                                                Địa chỉ
                                                            </label>
                                                            <input
                                                                placeholder="Địa chỉ"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                className={cx('field-input')}
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

                                                    <div
                                                        className={cx(
                                                            'field field-show-floating-label field-required field-third ',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'field-input-wrapper field-input-wrapper-select',
                                                            )}
                                                        >
                                                            <label
                                                                className={cx('field-label')}
                                                                for="customer_shipping_province"
                                                            >
                                                                {' '}
                                                                Tỉnh / thành{' '}
                                                            </label>
                                                            <select
                                                                className={cx('field-input')}
                                                                id="customer_shipping_district"
                                                                name="customer_shipping_district"
                                                            >
                                                                <option data-code="null" value="null" selected="">
                                                                    Chọn Tỉnh / thành{' '}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={cx(
                                                            'field field-show-floating-label field-required field-third ',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'field-input-wrapper field-input-wrapper-select',
                                                            )}
                                                        >
                                                            <label
                                                                className={cx('field-label')}
                                                                for="customer_shipping_district"
                                                            >
                                                                Quận / huyện
                                                            </label>
                                                            <select
                                                                className={cx('field-input')}
                                                                id="customer_shipping_district"
                                                                name="customer_shipping_district"
                                                            >
                                                                <option data-code="null" value="null" selected="">
                                                                    Chọn quận / huyện
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={cx(
                                                            'field field-show-floating-label field-required  field-third  ',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'field-input-wrapper field-input-wrapper-select',
                                                            )}
                                                        >
                                                            <label
                                                                className={cx('field-label')}
                                                                for="customer_shipping_ward"
                                                            >
                                                                Phường / xã
                                                            </label>
                                                            <select
                                                                className={cx('field-input')}
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
                                            <div id="section-payment-method" className={cx('section')}>
                                                <div className={cx('section-header')}>
                                                    <h2 className={cx('section-title')}>Phương thức thanh toán</h2>
                                                </div>
                                                <div className={cx('section-content')}>
                                                    <div className={cx('content-box')}>
                                                        <div className={cx('radio-wrapper content-box-row')}>
                                                            <label
                                                                className={cx('radio-label')}
                                                                for="payment_method_id_1002766550"
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        'radio-input payment-method-checkbox',
                                                                    )}
                                                                >
                                                                    <input
                                                                        type-id="1"
                                                                        id="payment_method_id_1002766550"
                                                                        className={cx('input-radio')}
                                                                        name="payment_method_id"
                                                                        type="radio"
                                                                        value="1002766550"
                                                                        checked=""
                                                                    />
                                                                </div>
                                                                <div className={cx('radio-content-input')}>
                                                                    <img
                                                                        className={cx('main-img')}
                                                                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                                                        alt=""
                                                                    />
                                                                    <div>
                                                                        <span className={cx('radio-label-primary')}>
                                                                            Thanh toán khi giao hàng (COD)
                                                                        </span>
                                                                        <span
                                                                            className={cx('quick-tagline hidden')}
                                                                        ></span>
                                                                        <span className={cx('quick-tagline  hidden ')}>
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
                                <div className={cx('step-footer')}>
                                    <form id="form_next_step" accept-charset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" value="✓" />
                                        <button type="submit" className={cx('step-footer-continue-btn btn')}>
                                            <span className={cx('btn-content')}>Hoàn tất đơn hàng</span>
                                            <i className={cx('btn-spinner icon icon-button-spinner')}></i>
                                        </button>
                                    </form>
                                    <NavLink to={config.routes.cart}>Giỏ hàng</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('col-md-6 col-sm-12 col-xs-12')}>
                    {cart.map((item) => (
                        <div key={item._id}>
                            <div className={cx('sidebar')}>
                                <div className={cx('sidebar-content')}>
                                    <div className={cx('order-summary order-summary-is-collapsed')}>
                                        <h2 className={cx('visually-hidden')}>Thông tin đơn hàng</h2>
                                        <div className={cx('order-summary-sections')}>
                                            <div
                                                className={cx(
                                                    'order-summary-section order-summary-section-product-list',
                                                )}
                                                data-order-summary-section="line-items"
                                            >
                                                <table className={cx('product-table')}>
                                                    <tbody>
                                                        <tr className={cx('product')}>
                                                            <td className={cx('product-image')}>
                                                                <div className={cx('product-thumbnail')}>
                                                                    <div className={cx('product-thumbnail-wrapper')}>
                                                                        <img
                                                                            className={cx('product-thumbnail-image')}
                                                                            alt={item.title}
                                                                            src={item.images[0]}
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        className={cx('product-thumbnail-quantity')}
                                                                        aria-hidden="true"
                                                                    >
                                                                        {item.count}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className={cx('product-description')}>
                                                                <span
                                                                    className={cx(
                                                                        'product-description-name order-summary-emphasis',
                                                                    )}
                                                                >
                                                                    {item.title}
                                                                </span>

                                                                <span
                                                                    className={cx(
                                                                        'product-description-variant order-summary-small-text',
                                                                    )}
                                                                >
                                                                    S
                                                                </span>
                                                            </td>
                                                            <td className={cx('product-quantity visually-hidden')}>
                                                                {item.count}
                                                            </td>
                                                            <td className={cx('product-price')}>
                                                                <span className={cx('order-summary-emphasis')}>
                                                                    {item.price * item.count}.000 VND
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
                    <div className={cx('sidebar ')}>
                        <div className={cx('sidebar-content')}>
                            <div
                                className={cx('order-summary-section order-summary-section-discount')}
                                data-order-summary-section="discount"
                            >
                                <form id="form_discount_add" accept-charset="UTF-8" method="post">
                                    <input name="utf8" type="hidden" value="✓" />
                                    <div className={cx('fieldset')}>
                                        <div className={cx('field  ')}>
                                            <div className={cx('field-input-btn-wrapper')}>
                                                <div className={cx('field-input-wrapper field-two-thirds ')}>
                                                    <label className={cx('field-label')} for="discount.code">
                                                        Mã giảm giá
                                                    </label>
                                                    <input
                                                        placeholder="Mã giảm giá"
                                                        className={cx('field-input')}
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
                                                    className={cx('field-input-btn btn btn-default btn-disabled')}
                                                >
                                                    <span className={cx('field field-required field-third')}>
                                                        Sử dụng
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div
                                className={cx('order-summary-section order-summary-section-total-lines payment-lines')}
                                data-order-summary-section="payment-lines"
                            >
                                <table className={cx('total-line-table')}>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span className={cx('visually-hidden')}>Mô tả</span>
                                            </th>
                                            <th scope="col">
                                                <span className={cx('visually-hidden')}>Giá</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={cx('total-line total-line-subtotal')}>
                                            <td className={cx('total-line-name')}>Tạm tính</td>
                                            <td className={cx('total-line-price')}>
                                                <span className={cx('order-summary-emphasis')}>{total}.000 VND</span>
                                            </td>
                                        </tr>

                                        <tr className={cx('total-line total-line-shipping')}>
                                            <td className={cx('total-line-name')}>Phí vận chuyển</td>
                                            <td className={cx('total-line-price')}>
                                                <span
                                                    className={cx('order-summary-emphasis')}
                                                    data-checkout-total-shipping-target="0"
                                                >
                                                    —
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className={cx('total-line-table-footer')}>
                                        <tr className={cx('total-line')}>
                                            <td className={cx('total-line-name payment-due-label')}>
                                                <span className={cx('payment-due-label-total')}>Tổng cộng</span>
                                            </td>
                                            <td className={cx('total-line-name payment-due')}>
                                                <span
                                                    className={cx('payment-due-price')}
                                                    data-checkout-payment-due-target="22500000"
                                                >
                                                    {total}.000 VND
                                                </span>
                                                <span
                                                    className={cx('checkout_version')}
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
        </>
    );
}
