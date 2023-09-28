import { Link, useLocation } from "react-router-dom";

// Environment
import { useState } from "react"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";


// Components
import SideBar from './SideBar';

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false)


    type linksProps = {
        name: string;
        path: string;
        icon: any;
    }


    const links: linksProps[] = [
        {
            name:"Home",
            path:"/",
            icon: faHome,
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon: faList,
        },
        {
            name:"Settings",
            path: "/settings",
            icon: faCog,
        }
    ];


    function closeSideBar() {
        setShowSideBar(false);
    }

    function handleBurgerClick(event: React.MouseEvent<HTMLDivElement>) {
        setShowSideBar(!showSideBar);
        event.stopPropagation();
    }





    const location = useLocation();
   
    return(
        <>
        <div className="NavBarContainer Container">
            <Link to="/" className='Logo'>F<span>oo</span>diesHub</Link>
            <div className='Nav-Links '>
                {links.map(link =>(
                    <Link className={location.pathname === link.path ? 'Active' : ""} to={link.path} key={link.name}>{link.name}</Link>
                ))}
            </div>
            <div className={showSideBar ? "Burger-Icon Active" : "Burger-Icon"} onMouseDown={handleBurgerClick}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </div>
        { showSideBar && <SideBar links={links} onBlur={closeSideBar} onClose={closeSideBar} /> }
        </>
)
}

// this gets exported to App
export default NavBar;