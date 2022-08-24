import { HeaderOnly } from '~/components/Layout';

// Pages
import Shop from './pages/Shop';
import News from './pages/News';
import About from './pages/About';
import Sale from './pages/Sale';
import Contact from './pages/Contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Shop },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/sale', component: Sale },
    { path: '/contact', component: Contact, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
