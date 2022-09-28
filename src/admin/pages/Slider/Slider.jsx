import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { confirm } from 'react-confirm-box';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { DataContext } from '../../../pages/Cart/DataProvider';
function Slider() {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    const handleDelete = (id) => {
        const onClick = async () => {
            const result = await confirm(`Bạn có chắc chắn muốn xóa slide ${id} không?`);
            if (!result) {
                return;
            }
            axios
                .post(
                    `http://localhost:8080/tttn_be/public/api/slider/delete/${id}`,
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

    useEffect(() => {
        const aaa = async () => {
            const data = await axios.get('http://localhost:8080/tttn_be/public/api/slider/list', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            });
            return data;
        };
        aaa()
            .then((response) => {
                setData(response.data.listSlider);
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
            headerName: 'name',
            width: 230,
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
                        <Link to={`EditSlider/${params.row.id}`} style={{ textDecoration: 'none' }}>
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
        <div className={cx('datatable')}>
            <div className={cx('datatableTitle')}>
                Danh sách slide
                <Link to="/sliders/new-slider" className={cx('link')}>
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

export default Slider;
