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
                <div className={cx('col-md-6 col-sm-12 col-xs-12')}>
                    <div className={cx('section-content section-customer-information no-mb')}>
                        <p className={cx('section-content-text')}>
                            Bạn đã có tài khoản?
                            <a href="/account/login?urlredirect=%2Fcheckouts%2F00d70e6b7e3441f79642af5b2a725e29%3Fstep%3D1">
                                Đăng nhập
                            </a>
                        </p>

                        <div className={cx('fieldset')}>
                            <div className={cx('field field-required  ')}>
                                <div className={cx('field-input-wrapper')}>
                                    <label className={cx('field-label')} for="billing_address_full_name">
                                        Họ và tên
                                    </label>
                                    <input
                                        placeholder="Họ và tên"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        className={cx('field-input')}
                                        size="30"
                                        type="text"
                                        id="billing_address_full_name"
                                        name="billing_address[full_name]"
                                        value=""
                                        autocomplete="false"
                                    />
                                </div>
                            </div>

                            <div className={cx('field  field-two-thirds  ')}>
                                <div className={cx('field-input-wrapper')}>
                                    <label className={cx('field-label')} for="checkout_user_email">
                                        Email
                                    </label>
                                    <input
                                        autocomplete="false"
                                        placeholder="Email"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        className={cx('field-input')}
                                        size="30"
                                        type="email"
                                        id="checkout_user_email"
                                        name="checkout_user[email]"
                                        value=""
                                    />
                                </div>
                            </div>

                            <div className={cx('field field-required field-third  ')}>
                                <div className={cx('field-input-wrapper')}>
                                    <label className={cx('field-label')} for="billing_address_phone">
                                        Số điện thoại
                                    </label>
                                    <input
                                        autocomplete="false"
                                        placeholder="Số điện thoại"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        className={cx('field-input')}
                                        size="30"
                                        maxlength="15"
                                        type="tel"
                                        id="billing_address_phone"
                                        name="billing_address[phone]"
                                        value=""
                                    />
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="fieldset">
                                    <form
                                        autocomplete="off"
                                        id="form_update_shipping_method"
                                        className="field default"
                                        accept-charset="UTF-8"
                                        method="post"
                                    >
                                        <input name="utf8" type="hidden" value="✓" />
                                        <div className="content-box mt0">
                                            <div
                                                id="form_update_location_customer_shipping"
                                                className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                for="customer_pick_at_location_false"
                                            >
                                                <input name="utf8" type="hidden" value="✓" />
                                                <div className={cx('order-checkout__loading--box')}>
                                                    <div className={cx('order-checkout__loading--circle')}></div>
                                                </div>

                                                <div className={cx('field field-required  ')}>
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
                                                <input name="selected_customer_shipping_ward" type="hidden" value="" />

                                                <div
                                                    className={cx(
                                                        'field field-show-floating-label field-required field-third ',
                                                    )}
                                                >
                                                    <div
                                                        className={cx('field-input-wrapper field-input-wrapper-select')}
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
                                                            id="customer_shipping_province"
                                                            name="customer_shipping_province"
                                                        >
                                                            <option data-code="null" value="null">
                                                                Chọn tỉnh / thành{' '}
                                                            </option>

                                                            <option data-code="HC" value="50" selected="">
                                                                Hồ Chí Minh
                                                            </option>

                                                            <option data-code="HI" value="1">
                                                                Hà Nội
                                                            </option>

                                                            <option data-code="DA" value="32">
                                                                Đà Nẵng
                                                            </option>

                                                            <option data-code="AG" value="57">
                                                                An Giang
                                                            </option>

                                                            <option data-code="BV" value="49">
                                                                Bà Rịa - Vũng Tàu
                                                            </option>

                                                            <option data-code="BI" value="47">
                                                                Bình Dương
                                                            </option>

                                                            <option data-code="BP" value="45">
                                                                Bình Phước
                                                            </option>

                                                            <option data-code="BU" value="39">
                                                                Bình Thuận
                                                            </option>

                                                            <option data-code="BD" value="35">
                                                                Bình Định
                                                            </option>

                                                            <option data-code="BL" value="62">
                                                                Bạc Liêu
                                                            </option>

                                                            <option data-code="BG" value="15">
                                                                Bắc Giang
                                                            </option>

                                                            <option data-code="BK" value="4">
                                                                Bắc Kạn
                                                            </option>

                                                            <option data-code="BN" value="18">
                                                                Bắc Ninh
                                                            </option>

                                                            <option data-code="BT" value="53">
                                                                Bến Tre
                                                            </option>

                                                            <option data-code="CB" value="3">
                                                                Cao Bằng
                                                            </option>

                                                            <option data-code="CM" value="63">
                                                                Cà Mau
                                                            </option>

                                                            <option data-code="CN" value="59">
                                                                Cần Thơ
                                                            </option>

                                                            <option data-code="GL" value="41">
                                                                Gia Lai
                                                            </option>

                                                            <option data-code="HG" value="2">
                                                                Hà Giang
                                                            </option>

                                                            <option data-code="HM" value="23">
                                                                Hà Nam
                                                            </option>

                                                            <option data-code="HT" value="28">
                                                                Hà Tĩnh
                                                            </option>

                                                            <option data-code="HO" value="11">
                                                                Hòa Bình
                                                            </option>

                                                            <option data-code="HY" value="21">
                                                                Hưng Yên
                                                            </option>

                                                            <option data-code="HD" value="19">
                                                                Hải Dương
                                                            </option>

                                                            <option data-code="HP" value="20">
                                                                Hải Phòng
                                                            </option>

                                                            <option data-code="HU" value="60">
                                                                Hậu Giang
                                                            </option>

                                                            <option data-code="KH" value="37">
                                                                Khánh Hòa
                                                            </option>

                                                            <option data-code="KG" value="58">
                                                                Kiên Giang
                                                            </option>

                                                            <option data-code="KT" value="40">
                                                                Kon Tum
                                                            </option>

                                                            <option data-code="LI" value="8">
                                                                Lai Châu
                                                            </option>

                                                            <option data-code="LA" value="51">
                                                                Long An
                                                            </option>

                                                            <option data-code="LO" value="6">
                                                                Lào Cai
                                                            </option>

                                                            <option data-code="LD" value="44">
                                                                Lâm Đồng
                                                            </option>

                                                            <option data-code="LS" value="13">
                                                                Lạng Sơn
                                                            </option>

                                                            <option data-code="ND" value="24">
                                                                Nam Định
                                                            </option>

                                                            <option data-code="NA" value="27">
                                                                Nghệ An
                                                            </option>

                                                            <option data-code="NB" value="25">
                                                                Ninh Bình
                                                            </option>

                                                            <option data-code="NT" value="38">
                                                                Ninh Thuận
                                                            </option>

                                                            <option data-code="PT" value="16">
                                                                Phú Thọ
                                                            </option>

                                                            <option data-code="PY" value="36">
                                                                Phú Yên
                                                            </option>

                                                            <option data-code="QB" value="29">
                                                                Quảng Bình
                                                            </option>

                                                            <option data-code="QM" value="33">
                                                                Quảng Nam
                                                            </option>

                                                            <option data-code="QG" value="34">
                                                                Quảng Ngãi
                                                            </option>

                                                            <option data-code="QN" value="14">
                                                                Quảng Ninh
                                                            </option>

                                                            <option data-code="QT" value="30">
                                                                Quảng Trị
                                                            </option>

                                                            <option data-code="ST" value="61">
                                                                Sóc Trăng
                                                            </option>

                                                            <option data-code="SL" value="9">
                                                                Sơn La
                                                            </option>

                                                            <option data-code="TH" value="26">
                                                                Thanh Hóa
                                                            </option>

                                                            <option data-code="TB" value="22">
                                                                Thái Bình
                                                            </option>

                                                            <option data-code="TY" value="12">
                                                                Thái Nguyên
                                                            </option>

                                                            <option data-code="TT" value="31">
                                                                Thừa Thiên Huế
                                                            </option>

                                                            <option data-code="TG" value="52">
                                                                Tiền Giang
                                                            </option>

                                                            <option data-code="TV" value="54">
                                                                Trà Vinh
                                                            </option>

                                                            <option data-code="TQ" value="5">
                                                                Tuyên Quang
                                                            </option>

                                                            <option data-code="TN" value="46">
                                                                Tây Ninh
                                                            </option>

                                                            <option data-code="VL" value="55">
                                                                Vĩnh Long
                                                            </option>

                                                            <option data-code="VT" value="17">
                                                                Vĩnh Phúc
                                                            </option>

                                                            <option data-code="YB" value="10">
                                                                Yên Bái
                                                            </option>

                                                            <option data-code="DB" value="7">
                                                                Điện Biên
                                                            </option>

                                                            <option data-code="DC" value="42">
                                                                Đắk Lắk
                                                            </option>

                                                            <option data-code="DO" value="43">
                                                                Đắk Nông
                                                            </option>

                                                            <option data-code="DN" value="48">
                                                                Đồng Nai
                                                            </option>

                                                            <option data-code="DT" value="56">
                                                                Đồng Tháp
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
                                                        className={cx('field-input-wrapper field-input-wrapper-select')}
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
                                                            <option data-code="null" value="null">
                                                                Chọn quận / huyện
                                                            </option>

                                                            <option data-code="HC485" value="485">
                                                                Huyện Bình Chánh
                                                            </option>

                                                            <option data-code="HC487" value="487">
                                                                Huyện Cần Giờ
                                                            </option>

                                                            <option data-code="HC483" value="483" selected="">
                                                                Huyện Củ Chi
                                                            </option>

                                                            <option data-code="HC484" value="484">
                                                                Huyện Hóc Môn
                                                            </option>

                                                            <option data-code="HC486" value="486">
                                                                Huyện Nhà Bè
                                                            </option>

                                                            <option data-code="HC466" value="466">
                                                                Quận 1
                                                            </option>

                                                            <option data-code="HC475" value="475">
                                                                Quận 10
                                                            </option>

                                                            <option data-code="HC476" value="476">
                                                                Quận 11
                                                            </option>

                                                            <option data-code="HC477" value="477">
                                                                Quận 12
                                                            </option>

                                                            <option data-code="HC468" value="468">
                                                                Quận 3
                                                            </option>

                                                            <option data-code="HC469" value="469">
                                                                Quận 4
                                                            </option>

                                                            <option data-code="HC470" value="470">
                                                                Quận 5
                                                            </option>

                                                            <option data-code="HC471" value="471">
                                                                Quận 6
                                                            </option>

                                                            <option data-code="HC472" value="472">
                                                                Quận 7
                                                            </option>

                                                            <option data-code="HC473" value="473">
                                                                Quận 8
                                                            </option>

                                                            <option data-code="HC679" value="679">
                                                                Quận Bình Tân
                                                            </option>

                                                            <option data-code="HC480" value="480">
                                                                Quận Bình Thạnh
                                                            </option>

                                                            <option data-code="HC478" value="478">
                                                                Quận Gò Vấp
                                                            </option>

                                                            <option data-code="HC481" value="481">
                                                                Quận Phú Nhuận
                                                            </option>

                                                            <option data-code="HC479" value="479">
                                                                Quận Tân Bình
                                                            </option>

                                                            <option data-code="HC680" value="680">
                                                                Quận Tân Phú
                                                            </option>

                                                            <option data-code="HC2670" value="2670">
                                                                Thành phố Thủ Đức
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
                                                        className={cx('field-input-wrapper field-input-wrapper-select')}
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
                                                            <option data-code="null" value="null">
                                                                Chọn phường / xã
                                                            </option>

                                                            <option data-code="27496" value="27496">
                                                                Thị trấn Củ Chi
                                                            </option>

                                                            <option data-code="27508" value="27508">
                                                                Xã An Nhơn Tây
                                                            </option>

                                                            <option data-code="27502" value="27502" selected="">
                                                                Xã An Phú
                                                            </option>

                                                            <option data-code="27550" value="27550">
                                                                Xã Bình Mỹ
                                                            </option>

                                                            <option data-code="27544" value="27544">
                                                                Xã Hòa Phú
                                                            </option>

                                                            <option data-code="27511" value="27511">
                                                                Xã Nhuận Đức
                                                            </option>

                                                            <option data-code="27517" value="27517">
                                                                Xã Phú Hòa Đông
                                                            </option>

                                                            <option data-code="27499" value="27499">
                                                                Xã Phú Mỹ Hưng
                                                            </option>

                                                            <option data-code="27529" value="27529">
                                                                Xã Phước Hiệp
                                                            </option>

                                                            <option data-code="27526" value="27526">
                                                                Xã Phước Thạnh
                                                            </option>

                                                            <option data-code="27535" value="27535">
                                                                Xã Phước Vĩnh An
                                                            </option>

                                                            <option data-code="27514" value="27514">
                                                                Xã Phạm Văn Cội
                                                            </option>

                                                            <option data-code="27538" value="27538">
                                                                Xã Thái Mỹ
                                                            </option>

                                                            <option data-code="27523" value="27523">
                                                                Xã Trung An
                                                            </option>

                                                            <option data-code="27520" value="27520">
                                                                Xã Trung Lập Hạ
                                                            </option>

                                                            <option data-code="27505" value="27505">
                                                                Xã Trung Lập Thượng
                                                            </option>

                                                            <option data-code="27532" value="27532">
                                                                Xã Tân An Hội
                                                            </option>

                                                            <option data-code="27553" value="27553">
                                                                Xã Tân Phú Trung
                                                            </option>

                                                            <option data-code="27556" value="27556">
                                                                Xã Tân Thông Hội
                                                            </option>

                                                            <option data-code="27541" value="27541">
                                                                Xã Tân Thạnh Tây
                                                            </option>

                                                            <option data-code="27547" value="27547">
                                                                Xã Tân Thạnh Đông
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div
                                                    id="div_location_country_not_vietnam"
                                                    className={cx('section-customer-information ')}
                                                    style={{ display: 'none' }}
                                                >
                                                    <div className={cx('field field-two-thirds')}>
                                                        <div className={cx('field-input-wrapper')}>
                                                            <label
                                                                className={cx('field-label')}
                                                                for="billing_address_city"
                                                            >
                                                                Thành phố
                                                            </label>
                                                            <input
                                                                placeholder="Thành phố"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                className={cx('field-input')}
                                                                size="30"
                                                                type="text"
                                                                id="billing_address_city"
                                                                name="billing_address[city]"
                                                                value=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('field field-third')}>
                                                        <div className={cx('field-input-wrapper')}>
                                                            <label
                                                                className={cx('field-label')}
                                                                for="billing_address_zip"
                                                            >
                                                                Mã bưu chính
                                                            </label>
                                                            <input
                                                                placeholder="Mã bưu chính"
                                                                autocapitalize="off"
                                                                spellcheck="false"
                                                                className={cx('field-input')}
                                                                size="30"
                                                                type="text"
                                                                id="billing_address_zip"
                                                                name="billing_address[zip]"
                                                                value=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
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
