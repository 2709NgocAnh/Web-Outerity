import './Slider.module.scss';
import leftArrow from './icons/arrowleft.png';
import { ReactComponent as RightArrow } from './icons/right-arrow.svg';
import React from 'react';

function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            type="button"
            onClick={moveSlide}
            className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
        >
            {/* <img
                src={direction === 'next' ? RightArrow : leftArrow}
                alt={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
            /> */}
            <RightArrow />
        </button>
    );
}
export default BtnSlider;
