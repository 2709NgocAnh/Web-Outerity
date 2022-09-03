import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { height } from '@mui/system';

function Slider() {
    const cx = classNames.bind(styles);

    return (
        <>
            <div
                id="carouselExampleControls"
                className={cx('carousel slide')}
                data-bs-ride="carousel"
                style={{ width: '100%' }}
            >
                <div className={cx('carousel-inner')}>
                    <div className={cx('carousel-item active')}>
                        <img
                            width="1620px"
                            height="700px"
                            src="https://file.hstatic.net/200000312481/file/dsc05692_39baebe1403c487581b4cd9a39354736.jpg"
                            className={cx('d-block w-100')}
                            alt="..."
                        />
                    </div>
                    <div className={cx('carousel-item')}>
                        <img
                            width="1620px"
                            height="700px"
                            object-fit="cover"
                            src="https://i.pinimg.com/564x/01/b9/0d/01b90dcef5c3cf1e182c62a41b0db403.jpg"
                            className={cx('d-block w-100')}
                            alt="..."
                        />
                    </div>
                    <div className={cx('carousel-item')}>
                        <img
                            width="1620px"
                            height="700px"
                            object-fit="cover"
                            src="https://i.stack.imgur.com/4o=1baD.jpg?s=328&g"
                            className={cx('d-block w-100')}
                            alt="..."
                        />
                    </div>
                </div>
                <div>
                    <button
                        className={cx('carousel-control-prev btn1')}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                        style={{ width: 'auto', paddingLeft: 25 }}
                    >
                        <span className={cx('carousel-control-prev-icon')} aria-hidden="true" />
                        <span className={cx('visually-hidden')}>Previous</span>
                    </button>
                    <button
                        className={cx('carousel-control-next btn1')}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                        style={{ width: 'auto', paddingRight: 35 }}
                    >
                        <span className={cx('carousel-control-next-icon')} aria-hidden="true" />
                        <span className={cx('visually-hidden')}>Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Slider;
