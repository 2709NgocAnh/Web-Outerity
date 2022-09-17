import styles from './Users.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { DataContext } from '../../../pages/Cart/DataProvider';
function Users() {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    /*  const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }; */

    useEffect(() => {
        axios
            .get('http://localhost:8080/tttn_be/public/api/user/list', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setData(response.data.listUser);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const userColumns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return <div style={{ margin: '0 auto' }}>{params.row.id}</div>;
            },
        },
        {
            field: 'name',
            headerName: 'Họ và tên',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return (
                    <div className={cx('cellWithImg')} style={{ margin: '0 auto' }}>
                        <img className={cx('cellImg')} src={params.row.avatar} alt="avatar" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return <div style={{ margin: '0 auto' }}>{params.row.email}</div>;
            },
        },

        {
            field: 'type',
            headerName: 'Loại',
            width: 100,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return <div style={{ margin: '0 auto' }}>{params.row.type_id === 1 ? 'Admin' : 'Khách hàng'}</div>;
            },
        },

        {
            field: 'create_at',
            headerName: 'Ngày tạo',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>{moment(params.row.created_at).format('DD/MM/YYYY HH:mm')}</div>
                );
            },
        },
        {
            field: 'updated_at',
            headerName: 'Ngày Chỉnh sửa',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>{moment(params.row.updated_at).format('DD/MM/YYYY HH:mm')}</div>
                );
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',

            renderCell: (params) => {
                return (
                    <div className={cx('cellAction')} style={{ margin: '0 auto' }}>
                        <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>View</div>
                        </Link>
                        {/*  <div className={cx('deleteButton')} onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div> */}
                    </div>
                );
            },
        },
    ];

    return (
        <div className={cx('datatable')}>
            <div className={cx('datatableTitle')}>
                Danh sách người dùng
                <Link to="/users/new-user" className={cx('link')}>
                    Thêm mới
                </Link>
            </div>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    '& .super-app-theme--header': {
                        backgroundColor: '#89CFFD',
                    },
                }}
            >
                <DataGrid className={cx('datagrid')} rows={data} columns={userColumns} checkboxSelection />
            </Box>
        </div>
    );
}

export default Users;
