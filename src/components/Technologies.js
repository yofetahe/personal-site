import React, { Fragment } from 'react';

import PageTitle from './PageTitle';

import HTML from '../images/TechIcons/HTML.png';
import CSS from '../images/TechIcons/CSS.png';
import JS from '../images/TechIcons/JavaScript.png';
import angular from '../images/TechIcons/angular.png';
import jQuery from '../images/TechIcons/jQuery.png';
import AJAX from '../images/TechIcons/ajax.png';
import materialize from '../images/TechIcons/materialize.png';

import NodeJS from '../images/TechIcons/nodejs.png';
import python from '../images/TechIcons/python.png';
import CSharp from '../images/TechIcons/c-sharp.png';
import java from '../images/TechIcons/java.png';
import MEAN from '../images/TechIcons/MEAN.png';
import expressjs from '../images/TechIcons/expressjs.png';
import flask from '../images/TechIcons/flask.png';
import django from '../images/TechIcons/django.png';
import sql from '../images/TechIcons/sql.png';
import sqlite from '../images/TechIcons/sqlite.png';
import mysql from '../images/TechIcons/mysql.png';
import mongodb from '../images/TechIcons/mongodb.png';
import socket from '../images/TechIcons/socket.png';

import Intellij from '../images/TechIcons/Intellij.png';
import eclipse from '../images/TechIcons/eclipse.png';
import STS from '../images/TechIcons/STS.png';
import visualStudioCode from '../images/TechIcons/visual-studio-code.png';
import netbean from '../images/TechIcons/netbean.png';
import github from '../images/TechIcons/github.png';

import './index_page.css';
import './technologies.css';

const Technologies = () => {
    return (
        <Fragment>
            <div id="otherPageContent" className="HidenContent"></div>
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Technologies</div>
                <PageTitle pageTitle=" WHAT EXPERIENCE DO I HAVE? " />
                <div className="Technologies_Content">
                    <div className="Technologies_exp">
                        <div className="Technologies_Category">
                            <h4>Front End</h4>
                            <p>
                                Front-end is a term that involves the building of webpages and user interfaces for web-applications. 
                                It implements the structure, design, behavior, and animation of websites, web apps, or mobile 
                                apps.
                            </p>
                            <div className="TechList">
                                <h5>My Experience</h5>
                                <img src={HTML} alt="HTML" />
                                <img src={CSS} alt="CSS" />
                                <img src={JS} alt="JS" />
                                <img src={angular} alt="angular" />
                                <img src={jQuery} alt="jQuery" />
                                <img src={AJAX} alt="AJAX" />
                                <img src={materialize} alt="materialize" />
                            </div>
                        </div>
                        <div className="Technologies_Category">
                            <h4>Back End</h4>
                            <p>
                                Back end development refers to the server side of an application that powers those components which, 
                                together, enable the user-facing side of the website/application to even exist in the first place.
                            </p>
                            <div className="TechList">
                                <h5>My Experience</h5>
                                <img src={NodeJS} alt="nodejs" />
                                <img src={python} alt="python" />
                                <img src={CSharp} alt="csharp" />
                                <img src={java} alt="java" />
                                <img src={MEAN} alt="mean" />
                                <img src={expressjs} alt="expressjs" />
                                <img src={flask} alt="flask" />

                                <img src={django} alt="django" />
                                <img src={sql} alt="csharp" />
                                <img src={sqlite} alt="java" />
                                <img src={mysql} alt="mean" />
                                <img src={mongodb} alt="expressjs" />
                                <img src={socket} alt="flask" />
                            </div>
                        </div>
                        <div className="Technologies_Category effect2">
                            <h4>Tools</h4>
                            <p>A programming tool or software development tool is a computer program that software developers use to create, debug, maintain, or otherwise support other programs and applications.</p>
                            <div className="TechList">
                                <h5>My Experience</h5>
                                <img src={Intellij} alt="HTML" />
                                <img src={eclipse} alt="CSS" />
                                <img src={STS} alt="JS" />
                                <img src={visualStudioCode} alt="angular" />
                                <img src={netbean} alt="jQuery" />
                                <img src={github} alt="AJAX" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Technologies;