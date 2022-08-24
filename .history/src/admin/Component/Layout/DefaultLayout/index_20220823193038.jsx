import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
