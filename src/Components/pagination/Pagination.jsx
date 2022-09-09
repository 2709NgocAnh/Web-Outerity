// import styles from './Pagination.module.scss';
// import classNames from 'classnames/bind';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// function Pagination() {
//     const cx = classNames.bind(styles);
//     return (
//         <div className={cx('container')}>
//             <a href="/" className={cx('section')}>
//                 <i class="fa-solid fa-angles-left"></i>
//             </a>
//             <a href="/" className={cx('section')}>
//                 1
//             </a>
//             <a href="/" className={cx('section')}>
//                 2
//             </a>
//             <a href="/" className={cx('section')}>
//                 3
//             </a>
//             <a href="/" className={cx('section')}>
//                 4
//             </a>
//             <a href="/" className={cx('section')}>
//                 5
//             </a>
//             <a href="/" className={cx('section')}>
//                 6
//             </a>
//             <a href="/" className={cx('section')}>
//                 <i class="fa-solid fa-angles-right"></i>
//             </a>
//         </div>
//     );
// }

// export default Pagination;
import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={cx('pagination')}>
                {pageNumbers.map((number) => (
                    <li key={number} className={cx('page-item')}>
                        <a onClick={() => paginate(number)} href="#" className={cx('page-link')}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
