import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { data } from '~/data';
function Shop() {
    const cx = classNames.bind(styles);
    return (
        <>
            <img src="https://outerity.myharavan.com/collections/all" alt="anh shop">
                <button className={cx('name-btn')}>Shop</button>
            </img>
            <section className="product">
                <div className="container">
                    <div className="row">
                        {data.map((course, index) => {
                            return (
                                <div className={cx('col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item')} key={index}>
                                    <div className="card">
                                        <img src={course.imageUrl} className="card-img-top" alt="..." />
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
        </>
    );
}

export default Shop;
