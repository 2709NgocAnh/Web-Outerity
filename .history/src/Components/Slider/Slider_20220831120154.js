import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

function Slider() {
    const cx = classNames.bind(styles);

    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    });
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (<>
         <input checked type=radio name="slider" id="slide1" />
  <input type=radio name="slider" id="slide2" />
  <input type=radio name="slider" id="slide3" />
  <input type=radio name="slider" id="slide4" />
  <input type=radio name="slider" id="slide5" />
        <div className={cx('slider-wrapper')}>
            <div className={cx('inner')}>
                {dataSlider.map((obj, index) => {
                    return (
                        <article>
                            <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                                <div class="info top-left">
                                    <h3>Malacca</h3>
                                </div>
                                <img src={obj.imgURL} alt={`slider${index + 1}.jpeg`} />
                            </div>
                        </article>
                    );
                })}
            </div>
            <div class="slider-prev-next-control">
                <label forName="slide1"></label>
                <label forName="slide2"></label>
                <label forName="slide3"></label>
                <label forName="slide4"></label>
                <label forName="slide5"></label>
            </div>
            <div class="slider-dot-control">
                <label forName="slide1"></label>
                <label forName="slide2"></label>
                <label forName="slide3"></label>
                <label forName="slide4"></label>
                <label forName="slide5"></label>
            </div>

            <div className={cx('container-dots')}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? 'dot active' : 'dot'}
                    ></div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Slider;