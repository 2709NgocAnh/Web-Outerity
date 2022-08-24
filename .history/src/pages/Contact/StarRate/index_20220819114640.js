import { useState } from 'react';
import './StarRate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
};

function StarRate() {
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
            <h1> React Ratings </h1>
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
            <input className="wrapper-input" type={'email'} placeholder=" Email " />
            <textarea placeholder="Ý kiến của bạn" className="wrapper-text" />

            <button className="wrapper-btn">Submit</button>
        </div>
    );
}
export default StarRate;
