import { useEffect, useState } from 'react';
import '~/pages/Register/Register.module.scss';

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
            <div className="form-login">
                <div className="form-group">
                    <i className={icon} />
                    <input
                        className="form-input"
                        {...inputProps}
                        pattern={pattern}
                        value={value}
                        onChange={(e) => {
                            onChange(e);
                        }}
                    />
                </div>
            </div>
            {!check && <span>{errorMessage}</span>}
        </>
    );
};

export default FormInput;
