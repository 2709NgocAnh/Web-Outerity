import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Footer />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
