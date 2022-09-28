import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import '../../../pages/Cart/Payment/Payment.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { confirm } from 'react-confirm-box';

function SingleOrder() {
    const cx = classNames.bind(styles);
    const { id } = useParams();

    const [order, setOrder] = useState();
    const [orderdetail, setOrderdetail] = useState();
    const [orderstatus, setOrderstatus] = useState(1);
    const listorderstatus = [
        { id: 2, name: 'Xác nhận đơn hàng' },
        { id: 3, name: 'Đang giao' },
        { id: 4, name: 'Đã giao' },
    ];
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/order/orderDetail/${id}`);
            return data;
        };
        aaa()
            .then((response) => {
                setOrder(response.data.order);
                setOrderdetail(response.data.orderDetail);
                setOrderstatus(response.data.order.orderstatus_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    const handleOnclick = (status_id, status_name) => {
        const onClick = async () => {
            const result = await confirm(`Bạn có chắc chắn muốn chọn ${status_name} cho đơn hàng không?`);
            if (!result) {
                return;
            }
            axios
                .post(
                    `http://localhost:8080/tttn_be/public/api/order/edit/${id}`,
                    { orderstatus_id: status_id },
                    {
                        headers: {
                            Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        },
                    },
                )
                .then(function (response) {
                    alert(response.data.message);
                    console.log(response.data.error);
                    if (response.data.result) {
                        setOrderstatus(status_id);
                    }
                })
                .catch(function (error) {
                    alert(error);
                    console.log(error);
                });
        };
        onClick();
    };

    return (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <h1 className={cx('title')}>Thông tin đơn hàng</h1>

                        <div className={cx('item')} key={order?.id}>
                            <div className={cx('details')}>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Mã đơn hàng:</span>
                                    <span className={cx('itemKey')}> {order?.ordercode}</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Tên khách hàng:</span>
                                    <span className={cx('itemValue')}> {order?.fullname}</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Email:</span>
                                    <span className={cx('itemValue')}>{order?.email}</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Số điện thoại:</span>
                                    <span className={cx('itemValue')}>{order?.phone}</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Địa chỉ nhận hàng:</span>
                                    <span className={cx('itemValue')}>{order?.address}</span>
                                </div>
                                {order?.note != null ? (
                                    <div className={cx('detailItem')}>
                                        <span className={cx('itemKey')}>Chú thích:</span>
                                        <span className={cx('itemValue')}>{order?.note}</span>
                                    </div>
                                ) : (
                                    ''
                                )}

                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Ngày đặt hàng:</span>
                                    <span className={cx('itemValue')}>
                                        {moment(order?.created_at).format('DD/MM/YYYY HH:mm')}
                                    </span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Thông tin sản phẩm:</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <div className="row wrap">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div /* style={{ width: '65%' }} */>
                                                {orderdetail?.map((item) => (
                                                    <div key={item.id}>
                                                        <div
                                                            className={cx('sidebar ')}
                                                            style={{
                                                                width: '60%',
                                                                justifyContent: 'space-between',
                                                                paddingTop: '5px',
                                                            }}
                                                        >
                                                            <div className="sidebar-content">
                                                                <div className="order-summary order-summary-is-collapsed">
                                                                    <div className="order-summary-sections">
                                                                        <div
                                                                            className="order-summary-section order-summary-section-product-list"
                                                                            data-order-summary-section="line-items"
                                                                        >
                                                                            <table className="product-table">
                                                                                <tbody>
                                                                                    <tr
                                                                                        className="product"
                                                                                        style={{ width: '100%' }}
                                                                                    >
                                                                                        <td className="product-image">
                                                                                            <div className="product-thumbnail">
                                                                                                <div className="product-thumbnail-wrapper">
                                                                                                    <img
                                                                                                        className="product-thumbnail-image"
                                                                                                        alt={
                                                                                                            item.product_name
                                                                                                        }
                                                                                                        src={
                                                                                                            item.product_image
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                                <span
                                                                                                    className="product-thumbnail-quantity"
                                                                                                    aria-hidden="true"
                                                                                                >
                                                                                                    {item.num}
                                                                                                </span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="product-description">
                                                                                            <span className="product-description-name order-summary-emphasis">
                                                                                                {item.product_name}
                                                                                            </span>
                                                                                            {item.price_sale != null ? (
                                                                                                <>
                                                                                                    <del>
                                                                                                        <span className="product-description-name order-summary-emphasis">
                                                                                                            {item.price.toLocaleString(
                                                                                                                'it-IT',
                                                                                                                {
                                                                                                                    style: 'currency',
                                                                                                                    currency:
                                                                                                                        'VND',
                                                                                                                },
                                                                                                            )}{' '}
                                                                                                        </span>
                                                                                                    </del>
                                                                                                    <span className="product-description-name order-summary-emphasis">
                                                                                                        {item.price_sale.toLocaleString(
                                                                                                            'it-IT',
                                                                                                            {
                                                                                                                style: 'currency',
                                                                                                                currency:
                                                                                                                    'VND',
                                                                                                            },
                                                                                                        )}{' '}
                                                                                                    </span>
                                                                                                </>
                                                                                            ) : (
                                                                                                <span className="product-description-name order-summary-emphasis">
                                                                                                    {item.price.toLocaleString(
                                                                                                        'it-IT',
                                                                                                        {
                                                                                                            style: 'currency',
                                                                                                            currency:
                                                                                                                'VND',
                                                                                                        },
                                                                                                    )}{' '}
                                                                                                </span>
                                                                                            )}
                                                                                        </td>
                                                                                        <td className="product-quantity visually-hidden">
                                                                                            {item.num}
                                                                                        </td>
                                                                                        <td
                                                                                            className="product-price"
                                                                                            style={{
                                                                                                paddingLeft: '130px',
                                                                                            }}
                                                                                        >
                                                                                            <span className="order-summary-emphasis">
                                                                                                {(
                                                                                                    item.price *
                                                                                                    item.num
                                                                                                ).toLocaleString(
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
                                                <div
                                                    className={cx('sidebar ')}
                                                    style={{
                                                        width: '60%',
                                                        justifyContent: 'space-between',
                                                        paddingTop: '5px',
                                                    }}
                                                >
                                                    <div className={cx('sidebar-content')}>
                                                        <div
                                                            className="order-summary-section order-summary-section-total-lines payment-lines"
                                                            data-order-summary-section="payment-lines"
                                                        >
                                                            <table className="total-line-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            <span className="visually-hidden">
                                                                                Mô tả
                                                                            </span>
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
                                                                                {order?.price_product.toLocaleString(
                                                                                    'it-IT',
                                                                                    {
                                                                                        style: 'currency',
                                                                                        currency: 'VND',
                                                                                    },
                                                                                )}
                                                                            </span>
                                                                        </td>
                                                                    </tr>

                                                                    <tr className="total-line total-line-shipping">
                                                                        <td className="total-line-name">
                                                                            Phí vận chuyển
                                                                        </td>
                                                                        <td
                                                                            className="total-line-price"
                                                                            style={{
                                                                                paddingLeft: '210px',
                                                                            }}
                                                                        >
                                                                            <span
                                                                                className="order-summary-emphasis"
                                                                                data-checkout-total-shipping-target="0"
                                                                            >
                                                                                {order?.price_ship.toLocaleString(
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
                                                                <tfoot className="total-line-table-footer">
                                                                    <tr className="total-line">
                                                                        <td className="total-line-name payment-due-label">
                                                                            <strong className="payment-due-label-total">
                                                                                Tổng cộng:
                                                                            </strong>
                                                                        </td>
                                                                        <td className="total-line-name payment-due">
                                                                            <span
                                                                                className="payment-due-price"
                                                                                data-checkout-payment-due-target="22500000"
                                                                                style={{
                                                                                    fontSize: '1.6rem',
                                                                                }}
                                                                            >
                                                                                {order?.price_all.toLocaleString(
                                                                                    'it-IT',
                                                                                    {
                                                                                        style: 'currency',
                                                                                        currency: 'VND',
                                                                                    },
                                                                                )}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', marginTop: '30px' }}>
                                            {listorderstatus?.map((status) => (
                                                <button
                                                    disabled={status.id <= orderstatus ? true : false}
                                                    style={{
                                                        backgroundColor: '#0d6efd',
                                                        opacity: status.id <= orderstatus ? '0.5' : '1',
                                                        color: 'white',
                                                        padding: '5px 10px',
                                                        marginRight: '20px',
                                                    }}
                                                    onClick={() => {
                                                        handleOnclick(status.id, status.name);
                                                    }}
                                                >
                                                    {status.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleOrder;
