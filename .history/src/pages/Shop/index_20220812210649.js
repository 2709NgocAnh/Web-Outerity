import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { data } from '~/data';
function Shop() {
    const cx = classNames.bind(styles);
    return (
        <>
            <div className={cx('header')}>
                <button className={cx('header-btn')}>Shop</button>
            </div>
            <div className={cx('header-title')}>BEST SELLER</div>
            <div>
                <section className={cx('product')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            {data.map((course, index) => {
                                return (
                                    <div
                                        className={cx('col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item')}
                                        key={index}
                                    >
                                        <div className={cx('card')}>
                                            <img src={course.imageUrl} className={cx('card-img-top')} alt="..." />
                                            <div className={cx('card-body')}>
                                                <h5 className={cx('card-title')}>{course.courseName}</h5>
                                                <p className={cx('card-text')}>{course.metaDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Shop;
