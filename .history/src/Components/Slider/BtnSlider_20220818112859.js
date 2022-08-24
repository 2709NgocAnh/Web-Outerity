import './Slider.module.scss';
import leftArrow from './icons/left-arrow.svg';
import { ReactComponent as RightArrow } from './icons/right-arrow.svg';
import React from 'react';

function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            type="button"
            onClick={moveSlide}
            className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
        >
            {direction === 'next' ? <RightArrow /> : leftArrow}
        </button>
    );
}
export default BtnSlider;
