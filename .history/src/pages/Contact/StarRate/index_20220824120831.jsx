import { useState } from 'react';
import './StarRate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
};

function StarRate() {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
        <div className="wrapper">
            <h1 className="wrapper-title">Ý kiến khách hàng </h1>
            <div className="stars">
                {stars.map((_, index) => {
                    return (
                        <FontAwesomeIcon
                            icon={faStar}
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: 'pointer',
                            }}
                        />
                    );
                })}
            </div>
            <input
                className="wrapper-input"
                type="email"
                placeholder=" Email "
                pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
                onBlur={handleFocus}
                required="true"
                focused={focused.toString()}
            />
            <span>Vui lòng nhập lại mail</span>
            <textarea placeholder="Ý kiến của bạn" className="wrapper-text" />
            <span>Vui lòng nhập ý kiến của bạn</span>
            <button className="wrapper-btn">Submit</button>
        </div>
    );
}
export default StarRate;
