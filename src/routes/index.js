import config from '~/Components/config';
//Layout
import DefaultLayoutAdmin from '~/admin/Component/Layout/DefaultLayoutAdmin';
// Pages
import Shop from '~/pages/Shop';
import ProfileUser from '~/pages/ProfileUser/ProfileUser';
import ProfileOrder from '~/pages/ProfileUser/ProfileOrder';
import DetailOrder from '../pages/ProfileUser/DetailOrder';
import EditProfileUser from '../pages/ProfileUser/EditProfileUser';
import CollectBot from '~/pages/Shop/collect/collectbot';
import CollectTop from '~/pages/Shop/collect/collecttop';
import About from '~/pages/About/About';
import ReturnPolicy from '~/pages/About/ReturnPolicy';
import PrivacyPolicy from '~/pages/About/PrivacyPolicy';
import TermsService from '~/pages/About/TermsService';
import Contact from '~/pages/Contact';
import StarRate from '~/pages/Contact/StarRate';
import Register from '~/pages/Register';
import ForgetPassword from '~/pages/Register/ForgetPassword';
// import Search from '~/Components/Layout/component/Header/Search';
import Cart from '~/pages/Cart';
import Details from '~/pages/Cart/Detail';
import Payment from '~/pages/Cart/Payment/Payment';
//admin
import Home from '~/admin/pages/home/Home';
import Users from '~/admin/pages/Users/Users';
import Product from '~/admin/pages/product/Product';
import NewUser from '~/admin/pages/new/NewUser';
import NewSlider from '~/admin/pages/new/NewSlider';
import NewProduct from '~/admin/pages/new/NewProduct';
import NewCategory from '~/admin/pages/new/NewCategory';
import EditUser from '~/admin/pages/Edit/EditUser';
import EditProduct from '~/admin/pages/Edit/EditProduct';
import EditSlider from '~/admin/pages/Edit/EditSlider';
import EditCategory from '~/admin/pages/Edit/EditCategory';

import SingleUser from '~/admin/pages/single/SingleUser';
import SingleProduct from '~/admin/pages/single/SingleProduct';
import SingleOrder from '~/admin/pages/single/SingleOrder';
import SingleFeedback from '~/admin/pages/single/SingleFeedback';
import Order from '~/admin/pages/order/Order';
import Category from '~/admin/pages/Category/Category';
import Profile from '~/admin/pages/profile/Profile';
import Slider from '~/admin/pages/Slider/Slider';
import Feedback from '~/admin/pages/feedback/Feedback';

// Public routes
const publicRoutes = [
    { path: config.routes.shop, component: Shop },
    // { path: config.routes.list, component: Shop },
    { path: config.routes.profileuser, component: ProfileUser },
    { path: config.routes.profileorder, component: ProfileOrder },
    { path: config.routes.detailorder, component: DetailOrder },
    { path: config.routes.editprofileuser, component: EditProfileUser },
    { path: config.routes.collectbot, component: CollectBot },
    { path: config.routes.collecttop, component: CollectTop },

    /*  { path: config.routes.news, component: News }, */
    { path: config.routes.about, component: About },
    { path: config.routes.returnpolicy, component: ReturnPolicy },
    { path: config.routes.privacypolicy, component: PrivacyPolicy },
    { path: config.routes.termsservice, component: TermsService },
    /*  { path: config.routes.sale, component: Sale }, */
    { path: config.routes.contact, component: Contact },
    { path: config.routes.infostore, component: Contact },
    { path: config.routes.starrate, component: StarRate },

    { path: config.routes.register, component: Register },
    { path: config.routes.forgetpassword, component: ForgetPassword },

    { path: config.routes.cart, component: Cart },
    { path: config.routes.details, component: Details },
    { path: config.routes.payment, component: Payment },

    //admin
    { path: config.routes.admin, component: Home, layout: DefaultLayoutAdmin },
    // { path: config.routes.user, component: Users, layout: DefaultLayoutAdmin },

    { path: config.routes.users, component: Users, layout: DefaultLayoutAdmin },
    { path: config.routes.products, component: Product, layout: DefaultLayoutAdmin },
    { path: config.routes.categorys, component: Category, layout: DefaultLayoutAdmin },
    { path: config.routes.orders, component: Order, layout: DefaultLayoutAdmin },
    { path: config.routes.profile, component: Profile, layout: DefaultLayoutAdmin },
    { path: config.routes.sliders, component: Slider, layout: DefaultLayoutAdmin },
    { path: config.routes.feedbacks, component: Feedback, layout: DefaultLayoutAdmin },

    { path: config.routes.singleuser, component: SingleUser, layout: DefaultLayoutAdmin },
    { path: config.routes.singleproduct, component: SingleProduct, layout: DefaultLayoutAdmin },
    { path: config.routes.singleorder, component: SingleOrder, layout: DefaultLayoutAdmin },
    { path: config.routes.singlefeedback, component: SingleFeedback, layout: DefaultLayoutAdmin },

    { path: config.routes.newslider, component: NewSlider, layout: DefaultLayoutAdmin },
    { path: config.routes.newuser, component: NewUser, layout: DefaultLayoutAdmin },
    { path: config.routes.newproduct, component: NewProduct, layout: DefaultLayoutAdmin },
    { path: config.routes.newcategory, component: NewCategory, layout: DefaultLayoutAdmin },

    { path: config.routes.newslider, component: NewSlider, layout: DefaultLayoutAdmin },
    { path: config.routes.edituser, component: EditUser, layout: DefaultLayoutAdmin },

    { path: config.routes.editproduct, component: EditProduct, layout: DefaultLayoutAdmin },
    { path: config.routes.editcategory, component: EditCategory, layout: DefaultLayoutAdmin },

    { path: config.routes.editslider, component: EditSlider, layout: DefaultLayoutAdmin },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
