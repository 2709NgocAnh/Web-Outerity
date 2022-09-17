import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Slider() {
    const cx = classNames.bind(styles);
    const [list, setList] = useState([]);
    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/slider/list`);
            return data;
        };
        aaa()
            .then((response) => {
                setList(response.data.listSlider);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div
                id="carouselExampleControls"
                className={cx('carousel slide')}
                data-bs-ride="carousel"
                style={{ width: '100%' }}
            >
                <div className={cx('carousel-inner')}>
                    {list.map((slider, index) => {
                        return (
                            <div className={cx(index === 1 ? 'carousel-item active' : 'carousel-item')} key={slider.id}>
                                <img
                                    width="1620px"
                                    height="700px"
                                    src={slider?.image}
                                    className={cx('d-block w-100')}
                                    alt={slider?.name}
                                />
                            </div>
                        );
                    })}
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
