import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "@mui/material";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    return (

        <div className="navbar">

            <div className="left">
                <Link to="/">
                    <span style={{ textDecoration:"none"}}>Concert Buddy Finder</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon onClick={ toggle }/>
                <GridViewOutlinedIcon />

                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search" />
                </div>
                
            </div>

            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                     <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <span>John Doe</span>
                </div>
            </div>
        </div>


    )
}

export default Navbar