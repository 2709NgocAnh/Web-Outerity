import styles from './feedback.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { confirm } from 'react-confirm-box';
const Feedback = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/feedback/list`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setData(response.data.listFeedback);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        const onClick = async () => {
            const result = await confirm(`Bạn có chắc chắn muốn xóa phản hồi ${id} không?`);
            if (!result) {
                return;
            }
            axios
                .post(
                    `http://localhost:8080/tttn_be/public/api/feedback/delete/${id}`,
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
            headerName: 'Id ',
            width: 60,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'content',
            headerName: 'Nội dung',
            width: 460,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'created_at',
            headerName: 'Ngày gửi',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div style={{ margin: '0 auto' }}>{moment(params.row.created_at).format('DD/MM/YYYY HH:mm')}</div>
                );
            },
        },
        /* {
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
        }, */
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
                        <Link to={`/Feedbacks/${params.row.id}`} style={{ textDecoration: 'none' }}>
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
                        Danh sách phản hồi
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

export default Feedback;
