import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './menu.css';

import MenuIcon from '../images/menu.svg';
import MenuClose from '../images/Menu_Close.png';

const Menu = () => {

    const history = useHistory();

    const [currentPage, setCurrentPage] = useState("");
    const [size, setSize] = useState(0);

    useEffect(() => {
        setCurrentPage(history.location.pathname);
        setSize(window.innerWidth);
    });

    const handleMouseOver = (menu) => {
        document.getElementById(menu).className = "MenuMouseHover " + menu;
    }
    const handleMouseOut = (menu) => {
        var m = menu === "Home" ? "/" : "/"+menu;
        document.getElementById(menu).className = "Menu " + menu  + (currentPage === m ? " ActiveMenu" : "");
    }    

    const handleMenuOnClick = (menu) => {
        console.log(menu);
        var path = history.location.pathname;
        var new_path = (menu === "Home") ? "/" : "/"+menu;        
        if(new_path === path) return;
        console.log(new_path);
        // document.getElementById("otherPageContent").innerHTML = menu;        
        document.getElementById("otherPageContent").className = "DisplayedContent";
        document.getElementById("homePageContent").className = "HidenContent";

        document.getElementById("ViewMenuIcon").className = "ShowForSmallDevice";
        document.getElementById("MenuList").className = "HideForSmallDevice";
    
        setTimeout(() => handlePageNavigation(menu), 1200)
    }

    const handlePageNavigation = (menu) => {
        if(menu === "Home") 
            history.push("/")
        else    
            history.push("/"+menu);
    }

    const handleViewHideMenuOnClick = (value) => {
        
        if(value === "VIEW") {
            if(size > 1200) {
                document.getElementById("ViewMenuIcon").style.display = "none";
                document.getElementById("MenuList").style.display = "block";
            } else {
                document.getElementById("ViewMenuIcon").className = "HideForSmallDevice";
                document.getElementById("MenuList").className = "ShowForSmallDevice";
            }
        }
        
        if(value === "HIDE") {
            if(size > 1200) {
                document.getElementById("ViewMenuIcon").style.display = "block";
                document.getElementById("MenuList").style.display = "none";
            } else {
                document.getElementById("ViewMenuIcon").className = "ShowForSmallDevice";
                document.getElementById("MenuList").className = "HideForSmallDevice";
            }            
        }
    }
    
    return (        
        <Fragment>
            <div id="ViewMenuIcon" className={size < 1200 ? "ShowForSmallDevice" : ""}  >
                <div className="HideViewMenu"
                    onClick={() => handleViewHideMenuOnClick("VIEW")}> 
                    <img src={MenuIcon} alt="MenuIcon" style={{width: "30px"}} /> 
                </div>
            </div>
            <div id="MenuList" className={size < 1200 ? "HideForSmallDevice" : ""}>
                <div id="CloseButton" className="HideViewMenu"
                    onClick={() => handleViewHideMenuOnClick("HIDE")}> 
                    <img src={MenuClose} alt="MenuIcon" style={{width: "30px"}} />
                </div>
                <div id="Blogs" className={"Menu Blogs " + (currentPage === "/Blogs" ? "ActiveMenu" : "")} 
                    onMouseOver={()=> handleMouseOver("Blogs")} 
                    onMouseOut={() => handleMouseOut("Blogs")}
                    onClick={() => handleMenuOnClick("Blogs")}> 
                    BLOGS 
                </div>
                <div id="Resume" className={"Menu Resume " + (currentPage === "/Resume" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("Resume")} 
                    onMouseOut={() => handleMouseOut("Resume")}
                    onClick={() => handleMenuOnClick("Resume")}> 
                    RESUME
                </div>
                <div id="ContactMe" className={"Menu ContactMe " + (currentPage === "/ContactMe" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("ContactMe")} 
                    onMouseOut={() => handleMouseOut("ContactMe")}
                    onClick={() => handleMenuOnClick("ContactMe")}> 
                    CONTACT ME 
                </div>
                <div id="Technologies" className={"Menu Technologies " + (currentPage === "/Technologies" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("Technologies")} 
                    onMouseOut={() => handleMouseOut("Technologies")}
                    onClick={() => handleMenuOnClick("Technologies")}> 
                    TECHNOLOGIES 
                </div>
                <div id="Portfolio" className={"Menu Portfolio " + (currentPage === "/Portfolio" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("Portfolio")} 
                    onMouseOut={() => handleMouseOut("Portfolio")}
                    onClick={() => handleMenuOnClick("Portfolio")}> 
                    PORTFOLIO 
                </div>
                <div id="AboutMe" className={"Menu AboutMe " + (currentPage === "/AboutMe" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("AboutMe")} 
                    onMouseOut={() => handleMouseOut("AboutMe")}
                    onClick={() => handleMenuOnClick("AboutMe")}> 
                    ABOUT ME 
                </div>
                <div id="Home" className={"Menu Home " + (currentPage === "/" ? "ActiveMenu" : "")}
                    onMouseOver={()=> handleMouseOver("Home")} 
                    onMouseOut={() => handleMouseOut("Home")}
                    onClick={() => handleMenuOnClick("Home")}> 
                    HOME 
                </div>
            </div>
            <div className="MenuFooterContent">
                &copy; {(new Date().getFullYear())} Yofetahe H. All rights reserved.
            </div>
        </Fragment>
    );
}

export default Menu