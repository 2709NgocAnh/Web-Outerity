import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <Header className={'Header-wrapper'}>
            <div className={'Header-inner'}>
                <h2>Phan thij ngocj anh</h2>
            </div>
        </Header>
    );
}

export default Footer;
