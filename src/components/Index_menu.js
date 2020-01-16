import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import './index_page.css'
import MenuIcon from '../images/menu.svg';
import MenuClose from '../images/Menu_Close.png';

const Menu = () => {

    const history = useHistory();

    const handleMouseOver = (menu) => {
        document.getElementById(menu).className = "MenuMouseHover " + menu
    }
    const handleMouseOut = (menu) => {
        document.getElementById(menu).className = "Menu " + menu;
    }    

    const handleMenuOnClick = (menu) => {
        document.getElementById("otherPageContent").innerHTML = menu;
        document.getElementById("otherPageContent").className = "DisplayedContent";
        document.getElementById("homePageContent").className = "HidenContent";
    
        setTimeout(() => handlePageNavigation(menu), 1000)
    }

    const handleViewHideMenuOnClick = (value) => {
        if(value === "VIEW") {
            document.getElementById("ViewMenuIcon").style.display = "none";
            document.getElementById("MenuList").style.display = "block";
        }
        if(value === "HIDE") {
            document.getElementById("ViewMenuIcon").style.display = "block";
            document.getElementById("MenuList").style.display = "none";
        }
    }
    
    const handlePageNavigation = (menu) => {      
        if(menu === "Home") 
            history.push("/")
        else    
            history.push("/"+menu);
    }


    return (
        <Fragment>
            <div id="ViewMenuIcon" style={{display: "none"}}>
                <div className="HideViewMenu"
                    onClick={() => handleViewHideMenuOnClick("VIEW")}> 
                    <img src={MenuIcon} alt="MenuIcon" style={{width: "30px"}} /> 
                </div>
            </div>
            <div id="MenuList">
                <div id="CloseButton" className="HideViewMenu"
                    onClick={() => handleViewHideMenuOnClick("HIDE")}> 
                    <img src={MenuClose} alt="MenuIcon" style={{width: "30px"}} /> 
                </div>
                <div id="Blogs" className="Menu Blogs" 
                    onMouseOver={()=> handleMouseOver("Blogs")} 
                    onMouseOut={() => handleMouseOut("Blogs")}
                    onClick={() => handleMenuOnClick("Blogs")}> 
                    BLOGS 
                </div>
                <div id="Resume" className="Menu Resume"
                    onMouseOver={()=> handleMouseOver("Resume")} 
                    onMouseOut={() => handleMouseOut("Resume")}
                    onClick={() => handleMenuOnClick("Resume")}> 
                    RESUME
                </div>
                <div id="ContactMe" className="Menu ContactMe"
                    onMouseOver={()=> handleMouseOver("ContactMe")} 
                    onMouseOut={() => handleMouseOut("ContactMe")}
                    onClick={() => handleMenuOnClick("ContactMe")}> 
                    CONTACT ME 
                </div>
                <div id="Technologies" className="Menu Technologies"
                    onMouseOver={()=> handleMouseOver("Technologies")} 
                    onMouseOut={() => handleMouseOut("Technologies")}
                    onClick={() => handleMenuOnClick("Technologies")}> 
                    TECHNOLOGIES 
                </div>
                <div id="Portfolio" className="Menu Portfolio"
                    onMouseOver={()=> handleMouseOver("Portfolio")} 
                    onMouseOut={() => handleMouseOut("Portfolio")}
                    onClick={() => handleMenuOnClick("Portfolio")}> 
                    PORTFOLIO 
                </div>
                <div id="AboutMe" className="Menu AboutMe"
                    onMouseOver={()=> handleMouseOver("AboutMe")} 
                    onMouseOut={() => handleMouseOut("AboutMe")}
                    onClick={() => handleMenuOnClick("AboutMe")}> 
                    ABOUT ME 
                </div>
                <div id="Home" className="Menu Home"
                    onMouseOver={()=> handleMouseOver("Home")} 
                    onMouseOut={() => handleMouseOut("Home")}
                    onClick={() => handleMenuOnClick("Home")}> 
                    HOME 
                </div>
            </div>
        </Fragment>
    );
}

export default Menu