import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEmail, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const FormInput = (props) => {
    const { icon, label, errorMessage, onChange, pattern, id, value, values, ...inputProps } = props;
    const [check, setCheck] = useState();
    useEffect(() => {
        if (inputProps.name === 'confirmPassword') {
            setCheck(value === inputProps.reps);
        } else {
            setCheck(pattern && new RegExp(`${pattern}`).test(value));
        }
    }, [values]);

    return (
        <>
            <div className={cx('form-group')}>
                <FontAwesomeIcon class={icon} />
                <input
                    className={cx('form-input')}
                    {...inputProps}
                    pattern={pattern}
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                    }}
                />
            </div>
            {check && <span>{errorMessage}</span>}
        </>
    );
};

export default FormInput;
