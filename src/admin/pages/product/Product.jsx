import styles from './product.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Data = [
    {
        id: 1,
        name: 'Snow',
        // img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        status: 'active',
        email: '1snow@gmail.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        categoty_id: 123,
        content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbb',
        price: 35,
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
        // img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '2snow@gmail.com',
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
        // img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '3snow@gmail.com',
        status: 'pending',
        price: 45,
        price_sale: 24,
        num: 12,
        num_buy: 10,
        created_at: 24 - 12 - 2022,
        updated_at: 25 / 12 / 2022,
        created_by: 'ngoc anh',
        updated_by: 'ngoc anh',
    },
    {
        id: 4,
        name: 'Stark',
        // img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '4snow@gmail.com',
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
        email: '5snow@gmail.com',
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
        email: '6snow@gmail.com',
        status: 'active',
        price: 15,
    },
    {
        id: 7,
        name: 'Clifford',
        img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '7snow@gmail.com',
        status: 'passive',
        price: 44,
    },
    {
        id: 8,
        name: 'Frances',
        img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '8snow@gmail.com',
        status: 'active',
        price: 36,
    },
    {
        id: 9,
        name: 'Roxie',
        img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'pending',
        price: 65,
    },
    {
        id: 10,
        name: 'Roxie',
        img: 'https://imprices.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'active',
        price: 65,
    },
];
const Product = () => {
    const [data, setData] = useState(Data);
    const cx = classNames.bind(styles);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
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
            field: 'content',
            headerName: 'Content',
            type: 'text',
            width: 270,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'name',
            headerName: 'name',
            type: 'text',
            width: 230,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'categoty_id',
            headerName: 'Categoty',
            type: 'text',
            width: 270,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'price_sale',
            type: 'text',
            headerName: 'Price Sale',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'num',
            headerName: 'Mount',
            type: 'text',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'num_buy',
            headerName: 'Mount Buy',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'created_at',
            headerName: 'Created_at',
            type: 'date',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'update_at',
            headerName: 'Update_at',
            type: 'date',
            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            textAlight: 'center',
        },
        {
            field: 'created_by',
            headerName: 'Created_by',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'update_by',
            headerName: 'Update_by',
            type: 'text',

            width: 170,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },

        {
            field: 'status',
            headerName: 'Status',
            width: 160,
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

export default Product;
