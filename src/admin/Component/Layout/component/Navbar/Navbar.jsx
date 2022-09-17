import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { NavLink } from 'react-router-dom';
/* import config from '~/Components/config'; */
// import { DarkModeContext } from '../../context/darkModeContext';
// import { useContext } from 'react';

const Navbar = () => {
    const [auth, setAuth] = useState(true);
    const [authtype, setAuthtype] = useState(1);
    const [profile, setProfile] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/tttn_be/public/api/user/profile`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
            .then((response) => {
                setAuth(response.data.result);
                setProfile(response.data.user);
                setAuthtype(response.data.user.type_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        if (!auth || authtype != 1) {
            window.location.href = 'http://localhost:3000/register';
        }
    }, [auth, authtype]);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="logo">
                    <NavLink to={'/list'}>
                        <img
                            height="50px"
                            width="100px"
                            itemProp="logo"
                            src="https://file.hstatic.net/200000312481/file/logoo_bf8b94d84c4242109555c773681d1a61.png"
                            alt="Outerity"
                            className="img-responsive logoimg"
                        />
                    </NavLink>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button className="search-btn" onClick={() => {}}>
                        <SearchOutlinedIcon />
                    </button>
                </div>
                <div className="items">
                    {/* <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div> */}
                    {/* <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: 'TOGGLE' })} /> */}
                    {/* </div> */}
                    {/* <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div> */}
                    <div className="item">
                        <img src={profile?.avatar} alt="avatar" className="avatar" />
                    </div>
                    <div className="item">
                        <h5>{profile?.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
