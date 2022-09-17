const routes = {
    shop: '/:id',
    profileuser: '/profileuser',
    profileorder: '/profileorder',
    detailorder: '/profileorder/:id',
    editprofileuser: '/profileuser/EditProfileUser/:id',
    about: '/about',
    returnpolicy: '/chinh-sach-doi-tra',
    privacypolicy: '/chinh-sach-bao-mat',
    termsservice: '/dieu-khoan-dich-vu',
    contact: '/contact',
    infostore: '/thong-tin-cua-hang',
    starrate: '/danh-gia-khach-hang',
    register: '/register',
    forgetpassword: '/quen-mat-khau',
    cart: '/cart',
    details: '/product/:id',
    payment: '/payment',
    collect: '/collect',
    collecttop: 'collecttop',
    collectbot: 'collectbot',
    admin: '/admin',
    users: '/users',
    products: '/products',
    categorys: '/categorys',
    orders: '/orders',
    sliders: '/sliders',
    feedbacks: '/feedbacks',

    profile: '/profile',

    singleuser: '/users/:id',
    singleproduct: '/products/:id',
    singleorder: '/Orders/:id',
    singlefeedback: '/Feedbacks/:id',

    /*  users: '/users', */
    edituser: 'Users/EditUser/:id',
    editproduct: 'Products/EditProduct/:id',
    editcategory: 'categorys/EditCategory/:id',
    editslider: 'sliders/EditSlider/:id',

    newuser: '/users/new-user',
    newproduct: 'products/new-product',
    newcategory: 'categorys/new-category',
    newslider: 'sliders/new-slider',

    // login: '/admin/login',
    // list: '/admin/users/list',
    // single: '/admin/users/:userId',
    // new: '/admin/users/new',
    // product: '/admin/product/list',
    // productId: '/admin/product/:productid',

    // profile: '/@:nickname',
};

export default routes;
