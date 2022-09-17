import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '~/pages/Cart/Detail';
import '~/pages/Cart/Details.css';

import axios from 'axios';

function SingleProduct() {
    const cx = classNames.bind(styles);
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [productImage, setProductImage] = useState();
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        imgDiv.product.style.backgroundPosition = `${x}% ${y}%`;
    };
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/product/${id}`);
            return data;
        };
        aaa()
            .then((response) => {
                setProductImage(response.data.product_images);
                setProduct(response.data.product);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);
    return product ? (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <NavLink
                            className={(nav) => cx({ active: nav.isActive })}
                            to={`/Products/EditProduct/${product?.id}`}
                        >
                            <div className={cx('editButton')}>Edit</div>
                        </NavLink>
                        {/*  <div className={cx('editButton')}>Edit</div> */}
                        <h1 className={cx('title')}>{product?.name}</h1>

                        <div className={cx('item')} key={product?.id}>
                            <div className={cx('details')}>
                                {/* <h1 className={cx('title')}>{product?.name}</h1> */}
                                <div
                                    className={cx('imgContainer')}
                                    onMouseMove={handleMouseMove}
                                    style={{
                                        backgroundImage: `url(${
                                            productImage.length ? productImage[index].image : product.image
                                        })`,
                                    }}
                                    ref={imgDiv}
                                    onMouseLeave={() => (imgDiv.product.style.backgroundPosition = `center`)}
                                />

                                <div className={cx('thumb')}>
                                    {productImage?.map((img, index) => (
                                        <img src={img.image} alt="" key={index} onClick={() => setIndex(index)} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('details')} style={{ marginLeft: '60px' }}>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Trạng thái:</span>
                                    <span className={cx('itemValue')}>
                                        {product?.active === 1 ? 'Đang hoạt động' : 'Tạm dừng'}
                                    </span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Giá gốc:</span>
                                    <span className={cx('itemValue')}>
                                        {' '}
                                        {product?.price.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Giá sale:</span>
                                    <span className={cx('itemValue')}>
                                        {product?.price_sale != null
                                            ? product?.price_sale.toLocaleString('it-IT', {
                                                  style: 'currency',
                                                  currency: 'VND',
                                              })
                                            : ''}
                                    </span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Số lượng trong kho:</span>
                                    <span className={cx('itemValue')}>{product?.num}</span>
                                </div>
                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Số lượng đã bán:</span>
                                    <span className={cx('itemValue')}>{product?.mun_buy ? product?.mun_buy : 0}</span>
                                </div>

                                <div className={cx('detailItem')}>
                                    <span className={cx('itemKey')}>Content </span>
                                    <span className={cx('itemValue')}>{product?.content}</span>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div style={{ display: 'flex', margin: 50 }}>
            <Skeleton height={300} width={300} />
            <div style={{ display: 'flex', direction: 'collumn' }}>
                <Skeleton count={5} height={30} width={250} style={{ marginBottom: 20 }} />
            </div>
        </div>
    );
}

export default SingleProduct;
