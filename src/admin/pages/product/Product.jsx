import styles from './product.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { confirm } from 'react-confirm-box';
const Product = () => {
    const [list, setList] = useState([]);
    const cx = classNames.bind(styles);

    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get(`http://localhost:8080/tttn_be/public/api/product/list/list`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            });
            return data;
        };
        aaa()
            .then((response) => {
                setList(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const handleDelete = (id) => {
        const onClick = async () => {
            const result = await confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${id} không?`);
            if (!result) {
                return;
            }
            axios
                .post(
                    `http://localhost:8080/tttn_be/public/api/product/delete/${id}`,
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
                    alert(error);
                    console.log(error);
                });
        };
        onClick();
    };
    const userColumns = [
        {
            field: 'id',
            headerName: 'ID',
            type: 'text',
            width: 70,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            type: 'text',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('cellWithImg')} style={{ margin: '0 auto' }}>
                        <img className={cx('cellImg')} src={params.row.image} alt="avatar" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: 'category_id_text',
            headerName: 'Phân loại',
            type: 'text',
            width: 160,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'active',
            headerName: 'Trạng thái',
            width: 160,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.active}`}>
                        {params.row.active === 1 ? 'Đang hoạt động' : 'Tạm dừng'}
                    </div>
                );
            },
        },
        /*  {
            field: 'content',
            headerName: 'Nội dung',
            type: 'text',
            width: 270,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        }, */

        {
            field: 'price',
            headerName: 'Giá gốc',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.price.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </div>
                );
            },
        },
        {
            field: 'price_sale',
            type: 'text',
            headerName: 'Giá Sale',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.price_sale?.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </div>
                );
            },
        },
        {
            field: 'num',
            headerName: 'số lượng trong kho',
            type: 'text',
            width: 150,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'num_buy',
            headerName: 'Số lượng đã bán',
            type: 'text',

            width: 150,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'created_at',
            headerName: 'Ngày tạo',
            type: 'date',
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
            type: 'date',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            textAlight: 'center',
            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>{moment(params.row.update_at).format('DD/MM/YYYY HH:mm')}</div>
                );
            },
        },
        {
            field: 'created_by_text',
            headerName: 'Người tạo',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'updated_by_text',
            headerName: 'Người chỉnh sửa',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
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
                        <Link to={`/products/${params.row.id}`} style={{ textDecoration: 'none' }}>
                            <div className={cx('viewButton')}>View</div>
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
                        Danh sách sản phẩm
                        <Link to="new-product" className={cx('link')}>
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
                            rows={list}
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

export default Product;
