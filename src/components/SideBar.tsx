// Environment
import React, { useRef, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

// Components



type links = {
    name: string;
    path: string;
    icon: any;
}

interface SideBarProps {
    links: links[];
    onClose: () => void;
    onBlur: ()=> void;
  }


function SideBar (props: SideBarProps) {

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
              props.onBlur();
              event.stopPropagation();
            }
        }
    
        // Attach event listener to document
        document.addEventListener('mousedown', handleClickOutside);
    
        // Cleanup event listener on unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [props.onBlur]);

      const location = useLocation();
    
    
    return(
        <div className="SideBar" onClick={props.onClose} ref={sidebarRef}>
            {props.links.map(link=>(
                <Link className={location.pathname === link.path ? 'SideBarLink Active' : "SideBarLink"} to={link.path} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>

    )

}

export default SideBar