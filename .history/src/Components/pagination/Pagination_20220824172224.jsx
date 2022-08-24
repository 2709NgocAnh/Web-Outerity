import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Pagination() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('container')}>
            <a href="/" className={cx('section')}>
                <i class="fa-solid fa-angles-right"></i>
            </a>
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
            <a href="/" className={cx('section')}>
                <i class="fa-solid fa-angles-right"></i>
            </a>
        </div>
    );
}

export default Pagination;
