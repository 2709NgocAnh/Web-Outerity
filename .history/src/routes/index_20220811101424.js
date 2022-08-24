import config from '~/Components/config';

// Pages
import Shop from '~/pages/Shop';
import News from '~/pages/News';
import About from '~/pages/About';
import Sale from '~/pages/Sale';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Shop },
    { path: config.routes.news, component: News },
    { path: config.routes.about, component: About },
    { path: config.routes.sale, component: Sale },
    { path: config.routes.contact, component: Contact },

    // { path: config.routes.profile, component: Profile },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
