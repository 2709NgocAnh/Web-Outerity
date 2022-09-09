import styles from './Users.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',

        renderCell: (params) => {
            return (
                <div className={cx('cellWithImg')}>
                    <img className={cx('cellImg')} src={params.row.img} alt="avatar" />
                    {params.row.username}
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
    },

    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'create_at',
        headerName: 'Ngày tạo',
        width: 230,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'create_by',
        headerName: 'Ngày Chỉnh sửa',
        width: 230,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        status: 'admin',
        email: '1snow@gmail.com',
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '2snow@gmail.com',
        status: 'admin',
        age: 42,
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 3,
        username: 'Lannister',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '3snow@gmail.com',
        status: 'admin',
        age: 45,
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 4,
        username: 'Stark',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
            'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
            'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
            'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        ],
        email: '4snow@gmail.com',
        status: 'user',
        age: 16,
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 5,
        username: 'Targaryen',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '5snow@gmail.com',
        status: 'user',
        age: 22,
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 6,
        username: 'Melisandre',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '6snow@gmail.com',
        status: 'user',
        age: 15,
        create_at: '27/09/2001',
        create_by: '27/09/2001',
    },
    {
        id: 7,
        username: 'Clifford',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '7snow@gmail.com',
        status: 'user',
        age: 44,
    },
    {
        id: 8,
        username: 'Frances',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: '8snow@gmail.com',
        status: 'user',
        age: 36,
    },
    {
        id: 9,
        username: 'Roxie',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'user',
        age: 65,
    },
    {
        id: 10,
        username: 'Roxie',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        email: 'snow@gmail.com',
        status: 'user',
        age: 65,
    },
];
