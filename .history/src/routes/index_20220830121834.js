import config from '~/Components/config';
//Layout
import DefaultLayoutAdmin from '~/admin/Component/Layout/DefaultLayoutAdmin';
// Pages
import Shop from '~/pages/Shop';
import CollectBot from '~/pages/Shop/collect/collectbot';
import CollectTop from '~/pages/Shop/collect/collecttop';

import News from '~/pages/News';
import About from '~/pages/About/About';
import ReturnPolicy from '~/pages/About/ReturnPolicy';
import PrivacyPolicy from '~/pages/About/PrivacyPolicy';
import TermsService from '~/pages/About/TermsService';
import Sale from '~/pages/Sale';
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
import NewProduct from '~/admin/pages/new/NewProduct';

import Single from '~/admin/Component/single/Single';
import Order from '~/admin/pages/order/Order';
import Category from '~/admin/pages/Category/Category';
import Profile from '~/admin/pages/profile/Profile';

// Public routes
const publicRoutes = [
    { path: config.routes.shop, component: Shop },
    { path: config.routes.collect, component: Shop },
    { path: config.routes.collectbot, component: CollectBot },
    { path: config.routes.collecttop, component: CollectTop },

    { path: config.routes.news, component: News },
    { path: config.routes.about, component: About },
    { path: config.routes.returnpolicy, component: ReturnPolicy },
    { path: config.routes.privacypolicy, component: PrivacyPolicy },
    { path: config.routes.termsservice, component: TermsService },
    { path: config.routes.sale, component: Sale },
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
    { path: config.routes.user, component: Users, layout: DefaultLayoutAdmin },

    { path: config.routes.single, component: Single, layout: DefaultLayoutAdmin },
    { path: config.routes.users, component: Users, layout: DefaultLayoutAdmin },
    { path: config.routes.product, component: Product, layout: DefaultLayoutAdmin },
    { path: config.routes.newproduct, component: NewProduct, layout: DefaultLayoutAdmin },

    { path: config.routes.newuser, component: NewUser, layout: DefaultLayoutAdmin },
    { path: config.routes.order, component: Order, layout: DefaultLayoutAdmin },
    { path: config.routes.category, component: Category, layout: DefaultLayoutAdmin },
    { path: config.routes.profile, component: Profile, layout: DefaultLayoutAdmin },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
