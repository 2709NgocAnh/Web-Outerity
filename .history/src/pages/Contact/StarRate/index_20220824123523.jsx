import { useState } from 'react';
import './StarRate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
};
function StarRate() {
    const [title, setTitle] = useState('');

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
            <textarea
                id="txtArea"
                // rows="10"
                // cols="70"
                placeholder="Ý kiến của bạn"
                className="wrapper-text"
                pattern="\S+.*"
                onBlur={handleFocus}
                required="true"
                focused={focused.toString()}
                onChange={(event) => setTitle(event.target.value)}
            />

            {title === '' ? 'Vui lòng nhâp ý kiến của bạn' : 'cảm ơn bạn đã góp ý cho chúng tôi'}
            <button className="wrapper-btn">Submit</button>
        </div>
    );
}
export default StarRate;
