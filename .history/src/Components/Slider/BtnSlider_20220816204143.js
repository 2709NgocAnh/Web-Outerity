import './Slider.module.scss';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';
import { Button } from 'bootstrap';

function BtnSlider({ direction, moveSlide }) {
    return (
        <input type={Button} onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
            />
        </input>
    );
}
export default BtnSlider;
