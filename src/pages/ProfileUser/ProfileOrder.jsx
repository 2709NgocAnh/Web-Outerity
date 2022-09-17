import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TabTitle from '~/Components/config/TabTitle';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import config from '~/Components/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';

const ProfileOrder = () => {
    TabTitle('Đơn hàng của tôi');
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (!auth) {
            window.location.href = 'http://localhost:3000/register';
        }
    }, [auth]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/personal/order/list`, {
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
    const userColumns = [
        {
            field: 'ordercode',
            headerName: 'Mã đơn hàng',
            type: 'text',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'left',
        },
        {
            field: 'fullname',
            headerName: 'Tên khách hàng',
            width: 100,
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
                        <Link to={`/profileorder/${params.row.id}`} style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>View</div>
                        </Link>
                    </div>
                );
            },
        },
    ];
    if (data?.length === 0) {
        return (
            <div className={cx('wrap')}>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar-page">
                        <div className="group-menu">
                            <div className="page_menu_title title_block">
                                <h2>Danh mục trang</h2>
                            </div>
                            <div className="layered layered-category">
                                <div className="layered-content">
                                    <ul className="tree-menu">
                                        <li className="active">
                                            <span></span>
                                            <NavLink to="/profileuser">Tài khoản của tôi</NavLink>
                                        </li>

                                        <li className="">
                                            <span></span>
                                            <NavLink to="/profileorder">Đơn hàng của tôi</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div className={cx('single')}>
                        <div className={cx('singleContainer')}>
                            <div className={cx('list')}>
                                <div className={cx('listContainer')}>
                                    {/* <div className={cx('datatable')}>
                                    <p>{data.length} đơn hàng</p>
                                    <Box
                                        sx={{
                                            height: '300px',
                                            width: '95%',
                                        }}
                                    >
                                        <DataGrid
                                            sx={{
                                                boxShadow: 2,
                                                border: 1,
                                                borderColor: 'lightgray',
                                                '& .MuiDataGrid-cell:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                            className={cx('datagrid')}
                                            rows={data}
                                            columns={userColumns.concat(actionColumn)}
                                            priceSize={9}
                                            rowsPerPageOptions={[9]}
                                            //checkboxSelection
                                        />
                                    </Box>
                                </div> */}
                                    <div className={cx('row')}>
                                        <img
                                            src="https://vietnam.extranet-aec.com/img/empty-cart.png"
                                            alt="ảnh lỗi"
                                            className={cx('cardimg')}
                                            style={{
                                                paddingTop: '10px',
                                                maxWidth: '310px',
                                                width: ' 250px !important',
                                                height: '100%',
                                                maxHeight: '300px',
                                                margin: 'auto',
                                                display: 'block',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <h1 className={cx('noproduct')} style={{textAlign:'center'}}>Chưa có đơn hàng</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrap')}>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar-page">
                        <div className="group-menu">
                            <div className="page_menu_title title_block">
                                <h2>Danh mục trang</h2>
                            </div>
                            <div className="layered layered-category">
                                <div className="layered-content">
                                    <ul className="tree-menu">
                                        <li className="active">
                                            <span></span>
                                            <NavLink to="/profileuser">Tài khoản của tôi</NavLink>
                                        </li>

                                        <li className="">
                                            <span></span>
                                            <NavLink to="/profileorder">Đơn hàng của tôi</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div className={cx('single')}>
                        <div className={cx('singleContainer')}>
                            <div className={cx('list')}>
                                <div className={cx('listContainer')}>
                                    <div className={cx('datatable')}>
                                        <p>{data.length} đơn hàng</p>
                                        <Box
                                            sx={{
                                                height: '300px',
                                                width: '95%',
                                            }}
                                        >
                                            <DataGrid
                                                sx={{
                                                    boxShadow: 2,
                                                    border: 1,
                                                    borderColor: 'lightgray',
                                                    '& .MuiDataGrid-cell:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                                className={cx('datagrid')}
                                                rows={data}
                                                columns={userColumns.concat(actionColumn)}
                                                priceSize={9}
                                                rowsPerPageOptions={[9]}
                                                //checkboxSelection
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProfileOrder;
