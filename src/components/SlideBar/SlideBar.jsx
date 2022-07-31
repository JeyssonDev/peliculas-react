import { useState } from 'react';
import './SlideBar.css';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SideItem from '../SideItems/SideItem';

function SlideBar() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={show ? 'sidebar side__show' : 'sidebar'}>
                <Link to="/">
                    {' '}
                    <div className="logo">
                        <img
                            src="https://www.clipartmax.com/png/middle/1-10021_clipart-movies-hd-movies-logo-transparent.png"
                            alt="logo"
                        />
                    </div>
                </Link>
                <div className="side__box">
                    <div className="box__one">
                        <span className="heading">Menu</span>
                        <SideItem
                            Icon={HomeMaxIcon}
                            Name="Home"
                            active
                            link="/"
                        />
                        <SideItem
                            Icon={SearchIcon}
                            Name="Search"
                            link="/search"
                        />
                        <SideItem
                            Icon={FavoriteBorderIcon}
                            Name="Favorite"
                            link="/favorite"
                        />
                        <SideItem
                            Icon={AddIcon}
                            Name="Add Movie"
                            link="/add-movie"
                        />
                    </div>
                </div>
                <div className="menu__icon" onClick={() => setShow(!show)}>
                    <MenuIcon />
                </div>
            </div>
            <div
                className={show ? 'layer layer__show' : 'layer'}
                onClick={() => setShow(false)}
            ></div>
        </>
    );
}

export default SlideBar;
