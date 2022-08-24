import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
function Pagination() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('container')}>
            <a href="/" className={cx('section')}>
                1
            </a>
            <a href="/" className={cx('section')}>
                2
            </a>
            <a href="/" className={cx('section')}>
                3
            </a>
            <a href="/" className={cx('section')}>
                4
            </a>
            <a href="/" className={cx('section')}>
                5
            </a>
            <a href="/" className={cx('section')}>
                6
            </a>
        </div>
    );
}

export default Pagination;
