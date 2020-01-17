import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './index_menu.css';
import MenuIcon from '../images/menu.svg';
import MenuClose from '../images/Menu_Close.png';

const Menu = () => {

    const history = useHistory();

    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        setCurrentPage(history.location.pathname);
    });

    const handleMouseOver = (menu) => {
        document.getElementById(menu).className = "MenuMouseHover " + menu;
    }
    const handleMouseOut = (menu) => {
        var m = menu === "Home" ? "/" : "/"+menu;
        document.getElementById(menu).className = "Menu " + menu  + (currentPage === m ? " ActiveMenu" : "");
    }    

    const handleMenuOnClick = (menu) => {

        var path = history.location.pathname;
        var new_path = (menu === "Home") ? "/" : "/"+menu;
        if(new_path === path) return;

        document.getElementById("otherPageContent").innerHTML = menu;        
        document.getElementById("otherPageContent").className = "DisplayedContent";
        document.getElementById("homePageContent").className = "HidenContent";
    
        setTimeout(() => handlePageNavigation(menu), 1000)
    }

    const handlePageNavigation = (menu) => {
        if(menu === "Home") 
            history.push("/")
        else    
            history.push("/"+menu);
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
        </Fragment>
    );
}

export default Menu