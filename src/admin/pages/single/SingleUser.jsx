import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { userRows } from '~/admin/pages/Users/datatablesource';

function SingleUser() {
    const cx = classNames.bind(styles);
    const { id } = useParams();

    const users = userRows.filter((userRow) => {
        console.log('userRow', typeof userRow.id);
        console.log('userRow', typeof id);
        return userRow.id == id;
    });

    return (
        <div className={cx('single')}>
            <div className={cx('singleContainer')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <h1 className={cx('title')}>Information</h1>
                        {users.map((userRow) => {
                            return (
                                <div className={cx('item')} key={userRow.id}>
                                    <NavLink
                                        className={(nav) => cx({ active: nav.isActive })}
                                        to={`/User/EditUser/${userRow.id}`}
                                    >
                                        <div className={cx('editButton')}>Edit</div>
                                    </NavLink>
                                    <img src={userRow.img} alt="" className={cx('itemImg')} />

                                    <div className={cx('details')}>
                                        <h1 className={cx('title')}>{userRow.username}</h1>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Status</span>
                                            <span className={cx('itemValue')}>{userRow.status}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Email</span>
                                            <span className={cx('itemValue')}>{userRow.email}</span>
                                        </div>
                                        <div className={cx('detailItem')}>
                                            <span className={cx('itemKey')}>Ngày tạo </span>
                                            <span className={cx('itemValue')}>{userRow.create_at}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleUser;
