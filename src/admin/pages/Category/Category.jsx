import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { confirm } from 'react-confirm-box';
const Category = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);

    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/category/list`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            });
            return data;
        };
        aaa()
            .then((response) => {
                setData(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        const onClick = async () => {
            const result = await confirm(`Bạn có chắc chắn muốn xóa danh mục ${id} không?`);
            if (!result) {
                return;
            }
            axios
                .post(
                    `http://localhost:8080/tttn_be/public/api/category/delete/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        },
                    },
                )
                .then((response) => {
                    alert(response.data.message);
                    if (response.data.result) {
                        window.location.reload();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        onClick();
    };
    const userColumns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'name',
            headerName: 'Tên danh mục',
            width: 200,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'active',
            headerName: 'Trạng thái',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('status')}>
                        <span className={cx(`${params.row.active}`)}>
                            {params.row.active === 1 ? 'Đang hoạt động' : 'Tạm dừng'}
                        </span>
                    </div>
                );
            },
        },
        {
            field: 'created_at',
            headerName: 'Ngày tạo',
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
        {
            field: 'created_by_text',
            headerName: 'Người tạo',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'updated_by_text',
            headerName: 'Người chỉnh sửa',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
    ];
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Công cụ',
            width: 200,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('cellAction')}>
                        <Link to={`EditCategory/${params.row.id}`} style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>Edit</div>
                        </Link>
                        <div className={cx('deleteButton')} onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
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
                        Danh mục
                        <Link to="/categorys/new-category" className={cx('link')}>
                            Thêm mới
                        </Link>
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
                            priceSize={9}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Category;
