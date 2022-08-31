import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { userRows } from '~/admin/pages/Users/datatablesource';

function Single() {
    const cx = classNames.bind(styles);
    const { id } = useParams();

    const users = userRows.filter((userRow) => {
        return userRow.id === id;
    });

    console.log(id);

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
                        {users.map((userRow) => {
                            return (
                                <div className={cx('item')} key={userRow.id}>
                                    <img src={userRow.img} alt="" className={cx('itemImg')} />
                                    {console.log(id)}
                                    {console.log(userRow.id)}

                                    <div className={cx('details')}>
                                        <div className={cx('detailItem')}>
                                            <h1 className={cx('title')}>{userRow.username}</h1>
                                            <span className={cx('itemKey')}>Status</span>
                                            <span className={cx('itemKey')}>{userRow.status}</span>
                                            <span className={cx('itemKey')}>Email</span>
                                            <span className={cx('itemValue')}>{userRow.email}</span>
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
