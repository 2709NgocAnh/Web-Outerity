import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { userRows } from '~/admin/pages/Users/datatablesource';
// import Chart from '../../components/chart/Chart';
import List from '../table/Table';
function Single() {
    const cx = classNames.bind(styles);
    const users = userRows.filter((product, index) => {
        return product._id === id;
    });
    // const [collects, setCollects] = useState([
    //     {
    //         _id: '1',
    //         title: 'Name',
    //         value: 'Jane Doe',
    //     },
    //     {
    //         _id: '2',
    //         title: 'Email',
    //         value: 'janedoe@gmail.com',
    //     },
    //     {
    //         _id: '3',
    //         title: 'Phone:',
    //         value: '+1 2345 67 89',
    //     },
    //     {
    //         _id: '4',
    //         title: 'Address:',
    //         value: 'Elton St. 234 Garden Yd. NewYork',
    //     },
    //     {
    //         _id: '5',
    //         img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    //     },
    // ]);
    return (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <div className={cx('editButton')}>Edit</div>
                        <h1 className={cx('title')}>Information</h1>
                        {users.map((user) => {
                            return (
                                <div className={cx('item')} key={user._id}>
                                    <img src={user.img} alt="" className={cx('itemImg')} />

                                    <div className={cx('details')}>
                                        <div className={cx('detailItem')}>
                                            <h1 className={cx('title')}>{user.username}</h1>
                                            <span className={cx('itemKey')}>Status</span>
                                            <span className={cx('itemKey')}>{user.status}</span>
                                            <span className={cx('itemKey')}>Email</span>
                                            <span className={cx('itemValue')}>{user.email}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className={cx('right')}>
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div> */}
                </div>
                {/* <div className={cx('bottom')}>
                    <h1 className={cx('title')}>Last Transactions</h1>
                    <List />
                </div> */}
            </div>
        </div>
    );
}

export default Single;
