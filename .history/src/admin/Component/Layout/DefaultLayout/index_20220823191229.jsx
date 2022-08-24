import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
