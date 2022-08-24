import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/Components/Layout/component/Header';
import Footer from '~/Components/Layout/component/Footer';
import Slider from '~/Components/Slider/Slider';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slider />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
