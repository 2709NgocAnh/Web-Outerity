import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Data = [
    {
        id: 1,

        fullname: 'Snow',

        status: 'active',

        created_at: 24 / 12 / 2022,
        updated_at: 25 / 12 / 2022,
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
];
const Category = () => {
    const cx = classNames.bind(styles);
    const [data, setData] = useState(Data);
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
            width: 270,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'created_at',
            headerName: 'Created_at',
            width: 200,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'update_at',
            headerName: 'Update_at',
            width: 200,

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
                    <div className={cx(`cellWithStatus`)}>
                        <div className={cx(`${params.row.status}`)}>{params.row.status}</div>
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
                        <NavLink className={cx('viewButton')} to={`/Category/EditCategory/${params.id}`}>
                            <div className={cx('editButton')}>Edit</div>
                        </NavLink>{' '}
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
                        <NavLink to="new-categorys" className={cx('link')}>
                            Thêm mới
                        </NavLink>
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
