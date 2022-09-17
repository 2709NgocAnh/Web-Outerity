// import styles from './Pagination.module.scss';
// import classNames from 'classnames/bind';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// function Pagination({ listpage, setCurrentpage, currentpage, totalpage }) {
//     const cx = classNames.bind(styles);
//     return (
//         <div className={cx('container')}>
//             {listpage.map((page, i) => (
//                 <a
//                     className={cx('section')}
//                     key={i}
//                     onClick={() => {
//                         alert(`i ${i}`);

//                         if (i > 0 || i <= totalpage) {
//                             setCurrentpage(i);
//                         } else if (i === 0) {
//                             let t = currentpage - 1;
//                             setCurrentpage(t);
//                             if (currentpage <= 0) {
//                                 setCurrentpage(1);
//                                 alert(` page ${currentpage}`);
//                             }
//                         } else if (i > totalpage) {
//                             let t = currentpage + 1;
//                             if (t > totalpage) {
//                                 setCurrentpage(totalpage);
//                                 alert(` page ${currentpage}`);
//                             } else {
//                                 setCurrentpage(totalpage);
//                             }
//                         }
//                     }}
//                 >
//                     {page.label}
//                 </a>
//             ))}
//         </div>
//     );
// }

// export default Pagination;
import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

/* const Pagination = ({ listpage, setCurrentpage, currentpage, totalpage }) => { */
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

                        {console.log(number)}
                    </li>
                ))}
            </ul>
        </nav>
    );
    /*  return (
        <nav>
            <ul className={cx('pagination')}>
                {listpage?.map((page, index) => (
                    <li key={index} className={cx('page-item')}>
                        <a  href={`?page=${page}`}  className={cx('page-link')}>{page.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    ); */
};

export default Pagination;
