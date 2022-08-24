import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import './DefaultLayoutAdmin.scss';

function DefaultLayoutAdmin({ children }) {
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

export default DefaultLayoutAdmin;
