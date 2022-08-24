// Pages
import Shop from '~/Components/pages/Shop';
import News from '~/Components/pages/News';
import About from '~/Components/pages/About';
import Sale from '~/Components/pages/Sale';
import Contact from '~/Components/pages/Contact';

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
