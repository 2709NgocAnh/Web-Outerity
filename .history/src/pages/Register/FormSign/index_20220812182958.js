import classNames from 'classnames/bind';
import styles from '~/pages/Register/Register.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);
const FormSign = ({ icon, placeholder }) => {
    return (
        <>
            <div className={cx('form-group')}>
                <i className={icon} />
                <input autofocus autocomplete="off" className={cx('form-input')} placeholder={placeholder} />
            </div>
        </>
    );
};

export default FormSign;
