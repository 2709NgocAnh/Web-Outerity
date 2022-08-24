import './Slider.module.scss';
import leftArrow from './icons/arrowleft.png';
import { ReactComponent as rightArrow } from './icons/right-arrow.svg';
import React from 'react';

function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            type="button"
            onClick={moveSlide}
            className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
        >
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
            />
        </button>
    );
}
export default BtnSlider;
