import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Category = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([
        {
            id: 1,
            ordercode: 1,
            user_id: 1,
            fullname: 'Snow',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            status: 'active',
            email: '1snow@gmail.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            categoty_id: 123,
            price_product: 35,
            price_sale: 24,
            num: 12,
            num_buy: 10,
            created_at: 24 / 12 / 2022,
            updated_at: 25 / 12 / 2022,
            created_by: 'ngoc anh',
            updated_by: 'ngoc anh',
        },
        {
            id: 2,
            name: 'Jamie Lannister',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '2snow@gmail.com',
            status: 'passive',
            price: 42,
            price_sale: 24,
            num: 12,
            num_buy: 10,
            created_at: 24 / 12 / 2022,
            updated_at: 25 / 12 / 2022,
            created_by: 'ngoc anh',
            updated_by: 'ngoc anh',
        },
        {
            id: 3,
            name: 'Lannister',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '3snow@gmail.com',
            status: 'pending',
            price: 45,
            price_sale: 24,
            num: 12,
            num_buy: 10,
            created_at: 24 / 12 / 2022,
            updated_at: 25 / 12 / 2022,
            created_by: 'ngoc anh',
            updated_by: 'ngoc anh',
        },
        {
            id: 4,
            name: 'Stark',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '4snow@gmail.com',
            status: 'active',
            price: 16,
            price_sale: 24,
            num: 12,
            num_buy: 10,
            created_at: 24 / 12 / 2022,
            updated_at: 25 / 12 / 2022,
            created_by: 'ngoc anh',
            updated_by: 'ngoc anh',
        },
        {
            id: 5,
            name: 'Targaryen',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '5snow@gmail.com',
            status: 'passive',
            price: 22,
            price_sale: 24,
            num: 12,
            num_buy: 10,
            created_at: 24 / 12 / 2022,
            updated_at: 25 / 12 / 2022,
            created_by: 'ngoc anh',
            updated_by: 'ngoc anh',
        },
        {
            id: 6,
            name: 'Melisandre',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '6snow@gmail.com',
            status: 'active',
            price: 15,
        },
        {
            id: 7,
            name: 'Clifford',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '7snow@gmail.com',
            status: 'passive',
            price: 44,
        },
        {
            id: 8,
            name: 'Frances',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: '8snow@gmail.com',
            status: 'active',
            price: 36,
        },
        {
            id: 9,
            name: 'Roxie',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: 'snow@gmail.com',
            status: 'pending',
            price: 65,
        },
        {
            id: 10,
            name: 'Roxie',
            img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            content: 'snow@gmail.com',
            status: 'active',
            price: 65,
        },
    ]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
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
            field: 'fullname',
            headerName: 'Name',
            width: 70,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'created_at',
            headerName: 'Created_at',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'update_at',
            headerName: 'Update_at',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('cellAction')}>
                        <span className={cx(`status ${params.row.status}`)}>{params.row.status}</span>
                    </div>
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
                        <Link to="/users/test" style={{ textDecoration: 'none' }}>
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
                        Danh mục
                        <Link to="/users/new" className={cx('link')}>
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
