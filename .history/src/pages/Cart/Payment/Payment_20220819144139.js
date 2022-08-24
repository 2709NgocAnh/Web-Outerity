import React, { useContext, useState, useEffect } from 'react';
import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import { DataContext } from '../DataProvider';
import Colors from '../Colors';
import Sizes from '../Sizes';
import './Details.css';
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
    
        <div class="main">
							<div class="main-header">
							
								<a href="/" class="logo">
									
										<h1 class="logo-text">Outerity</h1>   
										
								</a>
							
							<style>
							a.logo{display: block;}
											.logo-cus{ 
												width: 100%; padding: 15px 0; 
												text-align: ; 
											}
											.logo-cus img{ max-height: 4.2857142857em  }
											
											.logo-text{
												text-align: ; 
											}
											
								            @media (max-width: 767px){
												.banner a{ display: block; }
											}
							</style>

								
									<ul class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="/cart">Giỏ hàng</a>
										</li>
										
											<li class="breadcrumb-item breadcrumb-item-current">
												Thông tin giao hàng
											</li>
										
									</ul>
								
							</div>
							<div class="main-content">
								
									   
												<div id="checkout_order_information_changed_error_message" class="hidden" style="margin-bottom:15px">


													
												<p class="field-message field-message-error alert alert-danger"><svg x="0px" y="0px" viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve"> <g> <path style="fill:#E2574C;" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> <span></span></p>
												</div>
												<script>
													$("html, body").animate({ scrollTop: 0 }, "slow");
												</script>
												

									<div class="step">
											
										<div class="step-sections steps-onepage" step="1">
											
												
											
												<div class="section">
													<div class="section-header">
														<h2 class="section-title">Thông tin giao hàng</h2>
													</div>
													<div class="section-content section-customer-information no-mb">
														
														
															<p class="section-content-text">
																Bạn đã có tài khoản?
																<a href="/account/login?urlredirect=%2Fcheckouts%2F00d70e6b7e3441f79642af5b2a725e29%3Fstep%3D1">Đăng nhập</a>
															</p>
														
														
														<div class="fieldset">
															
															
																<div class="field field-required  ">
																	<div class="field-input-wrapper">
																		<label class="field-label" for="billing_address_full_name">Họ và tên</label>
																		<input placeholder="Họ và tên" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_full_name" name="billing_address[full_name]" value="" autocomplete="false">
																	</div>
																	
																</div>
															
															
																
																	<div class="field  field-two-thirds  ">
																		<div class="field-input-wrapper">
																			<label class="field-label" for="checkout_user_email">Email</label>
																			<input autocomplete="false" placeholder="Email" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="email" id="checkout_user_email" name="checkout_user[email]" value="">
																		</div>
																		
																	</div>
																
															
															
																<div class="field field-required field-third  ">
																	<div class="field-input-wrapper">
																		<label class="field-label" for="billing_address_phone">Số điện thoại</label>
																		<input autocomplete="false" placeholder="Số điện thoại" autocapitalize="off" spellcheck="false" class="field-input" size="30" maxlength="15" type="tel" id="billing_address_phone" name="billing_address[phone]" value="">
																	</div>
																	
																</div>
															
															
														</div>
													</div>
													<div class="section-content">
														<div class="fieldset">
															
																	<form autocomplete="off" id="form_update_shipping_method" class="field default" accept-charset="UTF-8" method="post">
																		<input name="utf8" type="hidden" value="✓">
																		<div class="content-box mt0">
																					   
																			<div id="form_update_location_customer_shipping" class="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary " for="customer_pick_at_location_false">
																				<input name="utf8" type="hidden" value="✓">
																				<div class="order-checkout__loading--box">
																				<div class="order-checkout__loading--circle"></div>  
																			</div>
																			
																					<div class="field field-required  ">
																						<div class="field-input-wrapper">
																							<label class="field-label" for="billing_address_address1">Địa chỉ</label>
																							<input placeholder="Địa chỉ" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_address1" name="billing_address[address1]" value="">
																						</div>
																						
																					</div>
																			


																				<input name="selected_customer_shipping_country" type="hidden" value="">
																				<input name="selected_customer_shipping_province" type="hidden" value="">
																				<input name="selected_customer_shipping_district" type="hidden" value="">
																				<input name="selected_customer_shipping_ward" type="hidden" value="">
																				
																				<div class="field field-show-floating-label field-required field-third ">
																					<div class="field-input-wrapper field-input-wrapper-select">
																						<label class="field-label" for="customer_shipping_province"> Tỉnh / thành  </label>
																						<select class="field-input" id="customer_shipping_province" name="customer_shipping_province">
																							<option data-code="null" value="null" selected="">
																							
																							Chọn tỉnh / thành </option>
																							
																								
																									
																										<option data-code="HC" value="50">Hồ Chí Minh</option>
																									
																								
																									
																										<option data-code="HI" value="1">Hà Nội</option>
																									
																								
																									
																										<option data-code="DA" value="32">Đà Nẵng</option>
																									
																								
																									
																										<option data-code="AG" value="57">An Giang</option>
																									
																								
																									
																										<option data-code="BV" value="49">Bà Rịa - Vũng Tàu</option>
																									
																								
																									
																										<option data-code="BI" value="47">Bình Dương</option>
																									
																								
																									
																										<option data-code="BP" value="45">Bình Phước</option>
																									
																								
																									
																										<option data-code="BU" value="39">Bình Thuận</option>
																									
																								
																									
																										<option data-code="BD" value="35">Bình Định</option>
																									
																								
																									
																										<option data-code="BL" value="62">Bạc Liêu</option>
																									
																								
																									
																										<option data-code="BG" value="15">Bắc Giang</option>
																									
																								
																									
																										<option data-code="BK" value="4">Bắc Kạn</option>
																									
																								
																									
																										<option data-code="BN" value="18">Bắc Ninh</option>
																									
																								
																									
																										<option data-code="BT" value="53">Bến Tre</option>
																									
																								
																									
																										<option data-code="CB" value="3">Cao Bằng</option>
																									
																								
																									
																										<option data-code="CM" value="63">Cà Mau</option>
																									
																								
																									
																										<option data-code="CN" value="59">Cần Thơ</option>
																									
																								
																									
																										<option data-code="GL" value="41">Gia Lai</option>
																									
																								
																									
																										<option data-code="HG" value="2">Hà Giang</option>
																									
																								
																									
																										<option data-code="HM" value="23">Hà Nam</option>
																									
																								
																									
																										<option data-code="HT" value="28">Hà Tĩnh</option>
																									
																								
																									
																										<option data-code="HO" value="11">Hòa Bình</option>
																									
																								
																									
																										<option data-code="HY" value="21">Hưng Yên</option>
																									
																								
																									
																										<option data-code="HD" value="19">Hải Dương</option>
																									
																								
																									
																										<option data-code="HP" value="20">Hải Phòng</option>
																									
																								
																									
																										<option data-code="HU" value="60">Hậu Giang</option>
																									
																								
																									
																										<option data-code="KH" value="37">Khánh Hòa</option>
																									
																								
																									
																										<option data-code="KG" value="58">Kiên Giang</option>
																									
																								
																									
																										<option data-code="KT" value="40">Kon Tum</option>
																									
																								
																									
																										<option data-code="LI" value="8">Lai Châu</option>
																									
																								
																									
																										<option data-code="LA" value="51">Long An</option>
																									
																								
																									
																										<option data-code="LO" value="6">Lào Cai</option>
																									
																								
																									
																										<option data-code="LD" value="44">Lâm Đồng</option>
																									
																								
																									
																										<option data-code="LS" value="13">Lạng Sơn</option>
																									
																								
																									
																										<option data-code="ND" value="24">Nam Định</option>
																									
																								
																									
																										<option data-code="NA" value="27">Nghệ An</option>
																									
																								
																									
																										<option data-code="NB" value="25">Ninh Bình</option>
																									
																								
																									
																										<option data-code="NT" value="38">Ninh Thuận</option>
																									
																								
																									
																										<option data-code="PT" value="16">Phú Thọ</option>
																									
																								
																									
																										<option data-code="PY" value="36">Phú Yên</option>
																									
																								
																									
																										<option data-code="QB" value="29">Quảng Bình</option>
																									
																								
																									
																										<option data-code="QM" value="33">Quảng Nam</option>
																									
																								
																									
																										<option data-code="QG" value="34">Quảng Ngãi</option>
																									
																								
																									
																										<option data-code="QN" value="14">Quảng Ninh</option>
																									
																								
																									
																										<option data-code="QT" value="30">Quảng Trị</option>
																									
																								
																									
																										<option data-code="ST" value="61">Sóc Trăng</option>
																									
																								
																									
																										<option data-code="SL" value="9">Sơn La</option>
																									
																								
																									
																										<option data-code="TH" value="26">Thanh Hóa</option>
																									
																								
																									
																										<option data-code="TB" value="22">Thái Bình</option>
																									
																								
																									
																										<option data-code="TY" value="12">Thái Nguyên</option>
																									
																								
																									
																										<option data-code="TT" value="31">Thừa Thiên Huế</option>
																									
																								
																									
																										<option data-code="TG" value="52">Tiền Giang</option>
																									
																								
																									
																										<option data-code="TV" value="54">Trà Vinh</option>
																									
																								
																									
																										<option data-code="TQ" value="5">Tuyên Quang</option>
																									
																								
																									
																										<option data-code="TN" value="46">Tây Ninh</option>
																									
																								
																									
																										<option data-code="VL" value="55">Vĩnh Long</option>
																									
																								
																									
																										<option data-code="VT" value="17">Vĩnh Phúc</option>
																									
																								
																									
																										<option data-code="YB" value="10">Yên Bái</option>
																									
																								
																									
																										<option data-code="DB" value="7">Điện Biên</option>
																									
																								
																									
																										<option data-code="DC" value="42">Đắk Lắk</option>
																									
																								
																									
																										<option data-code="DO" value="43">Đắk Nông</option>
																									
																								
																									
																										<option data-code="DN" value="48">Đồng Nai</option>
																									
																								
																									
																										<option data-code="DT" value="56">Đồng Tháp</option>
																									
																								 
																							  
																						</select>
																					</div>
																						
																					
																				</div>
																				
																					
																						<div class="field field-show-floating-label field-required field-third ">
																							<div class="field-input-wrapper field-input-wrapper-select">
																								<label class="field-label" for="customer_shipping_district">Quận / huyện</label>
																								<select class="field-input" id="customer_shipping_district" name="customer_shipping_district">
																									<option data-code="null" value="null" selected="">Chọn quận / huyện</option>
																									
																								</select>
																							</div>
																							
																						</div>
																						
																							<div class="field field-show-floating-label field-required  field-third  ">
																								<div class="field-input-wrapper field-input-wrapper-select">
																									<label class="field-label" for="customer_shipping_ward">Phường / xã</label>
																									<select class="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
																										<option data-code="null" value="null" selected="">Chọn phường / xã</option>
																										
																									</select>
																								</div>
																								
																							</div>
																						
																					
																				
																				<div id="div_location_country_not_vietnam" class="section-customer-information " style="display: none;">
																					<div class="field field-two-thirds">
																						<div class="field-input-wrapper">
																							<label class="field-label" for="billing_address_city">Thành phố</label>
																							<input placeholder="Thành phố" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_city" name="billing_address[city]" value="">
																						</div>
																					</div>
																					<div class="field field-third">
																						<div class="field-input-wrapper">
																							<label class="field-label" for="billing_address_zip">Mã bưu chính</label>
																							<input placeholder="Mã bưu chính" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_zip" name="billing_address[zip]" value="">
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
													<div id="change_pick_location_or_shipping">
														
														
															
																<div id="section-shipping-rate">
																	<div class="section-header">
																		<h2 class="section-title">Phương thức vận chuyển</h2>
																	</div>
																	<div class="section-content">
																		
																			<div class="content-box  blank-slate">
																				<i class="blank-slate-icon icon icon-closed-box "></i>
																				<p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.</p>
																			</div>
																		
																	</div>
																</div>
															
															<div id="section-payment-method" class="section">
																<div class="section-header">
																	<h2 class="section-title">Phương thức thanh toán</h2>
																</div>
																<div class="section-content">
																	<div class="content-box">
																	
																		
																		
																		<div class="radio-wrapper content-box-row">
																			<label class="radio-label" for="payment_method_id_1002766550">
																				<div class="radio-input payment-method-checkbox">
																					<input type-id="1" id="payment_method_id_1002766550" class="input-radio" name="payment_method_id" type="radio" value="1002766550" checked="">
																				</div>
																				<div class="radio-content-input">
																				<img class="main-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1">
																				<div>
																				<span class="radio-label-primary">Thanh toán khi giao hàng (COD)</span>
																				<span class="quick-tagline hidden"></span>
																				<span class="quick-tagline  hidden ">Buy Now, Pay Later
																			
																					</span></div>
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
													<input name="utf8" type="hidden" value="✓">
													<button type="submit" class="step-footer-continue-btn btn">
														<span class="btn-content">Hoàn tất đơn hàng</span>
														<i class="btn-spinner icon icon-button-spinner"></i>
													</button>
												</form>
												<a class="step-footer-previous-link" href="/cart">
													Giỏ hàng
												</a>
											
										</div>
									</div>
								
							</div>
							<div class="hrv-coupons-popup">
								<div class="hrv-title-coupons-popup">
									<p>Chọn giảm giá <span class="count-coupons"></span></p>
									<div class="hrv-coupons-close-popup">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z" fill="#424242"></path>
										</svg>
									</div>
								</div>
								<div class="hrv-content-coupons-code">
								    <h3 class="coupon_heading">Mã giảm giá của shop</h3>
									<div class="hrv-discount-code-web">
									</div>
									<div class="hrv-discount-code-external">

									</div>
								</div>
							</div>
							<div class="hrv-coupons-popup-site-overlay"></div>
							<div class="main-footer footer-powered-by">Powered by Haravan</div>
						</div>
            {cart.map((item) => (
                <div className={cx('details cart')} key={item._id}>
                    <div className={cx('img-container')} style={{ backgroundImage: `url(${item.images[0]})` }} />
                    {/* <img className={cx('img-container')} src={item.images[0]} alt="" /> */}
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
        </>
    );
}
