import './Slider.module.scss';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';
import React from 'react';

function BtnSlider({ direction, moveSlide, ...others }) {
    return (
        <button type="button" onClick={moveSlide} others>
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
            />
        </button>
    );
}
export default BtnSlider;
