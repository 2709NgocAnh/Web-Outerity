import styles from './order.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
const Order = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/order/list`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setData(response.data.listOrder);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    /* const handleDelete = (id) => {
        //setData(data.filter((item) => item.id !== id));
    }; */
    const userColumns = [
        {
            field: 'ordercode',
            headerName: 'Mã đơn hàng',
            width: 150,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'fullname',
            headerName: 'Tên khách hàng',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'phone',
            headerName: 'Số điện thoại',
            width: 100,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'address',
            headerName: 'Địa chỉ giao hàng',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'price_all',
            headerName: 'Tổng tiền',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>
                        {' '}
                        {params.row.price_all.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </div>
                );
            },
        },
        {
            field: 'orderstatus_id_text',
            headerName: 'Trạng thái đơn hàng ',
            width: 150,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return <div style={{ margin: '0 auto', color: '#389b31' }}>{params.row.orderstatus_id_text}</div>;
            },
        },
        {
            field: 'created_at',
            headerName: 'Ngày đặt hàng',
            width: 170,
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
            headerName: 'Ngày chỉnh sửa',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>{moment(params.row.updated_at).format('DD/MM/YYYY HH:mm')}</div>
                );
            },
        },
    ];
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('cellAction')}>
                        <Link to={`/Orders/${params.row.id}`} style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>View</div>
                        </Link>
                        {/* <div className={cx('deleteButton')} onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div> */}
                    </div>
                );
            },
        },
    ];
    return (
        <div className={cx('list')}>
            <div className={cx('listContainer')}>
                <div className={cx('datatable')}>
                    <div className={cx('datatableTitle')}>
                        Danh sách đơn hàng
                        {/*  <Link to="/users/new" className={cx('link')}>
                            Thêm mới
                        </Link> */}
                    </div>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            '& .super-app-theme--header': {
                                backgroundColor: '#7451f8',
                            },
                        }}
                    >
                        <DataGrid
                            sx={{
                                boxShadow: 2,
                                border: 2,
                                borderColor: 'primary.light',
                                '& .MuiDataGrid-cell:hover': {
                                    color: 'primary.main',
                                },
                            }}
                            className={cx('datagrid')}
                            rows={data}
                            columns={userColumns.concat(actionColumn)}
                            ppriceSize={9}
                            rowsPerPpriceOptions={[9]}
                            checkboxSelection
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Order;
