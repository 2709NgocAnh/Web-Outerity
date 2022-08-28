import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import styles from './DefaultLayoutAdmin.scss';
import classNames from 'classnames/bind';

function DefaultLayoutAdmin({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayoutAdmin;
