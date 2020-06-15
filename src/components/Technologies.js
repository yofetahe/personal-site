import React, { Fragment, useState } from 'react';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';

import HTML from '../images/TechIcons/HTML.png';
import CSS from '../images/TechIcons/CSS.png';
import JS from '../images/TechIcons/JavaScript.png';
import TypeScript from '../images/TechIcons/typescript.png';
import Angular from '../images/TechIcons/angular.png';
import jQuery from '../images/TechIcons/jQuery.png';
import AJAX from '../images/TechIcons/ajax.png';
import Materialize from '../images/TechIcons/materialize.png';
import react from '../images/TechIcons/react.png';
import redux from '../images/TechIcons/redux.png';

import NodeJS from '../images/TechIcons/nodejs.png';
import python from '../images/TechIcons/python.png';
import CSharp from '../images/TechIcons/csharp.png';
import java from '../images/TechIcons/java.png';
import expressjs from '../images/TechIcons/expressjs.png';
import flask from '../images/TechIcons/flask.png';
import django from '../images/TechIcons/django.png';
import dotnet from '../images/TechIcons/dotnet.png';
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

import springCloud from '../images/TechIcons/spring_cloud.png';
import springBoot from '../images/TechIcons/spring_boot.png';

import './technologies.css';

const Technologies = () => {    
    const [frontEnd, setFrontEnd] = useState([ HTML, CSS, JS, TypeScript, Angular, jQuery, AJAX, Materialize, react, redux ]);
    const [backEnd, setBackEnd] = useState([ java, NodeJS, python, CSharp, socket, sql, sqlite, mysql, mongodb, springBoot, springCloud, django, expressjs, flask, dotnet ]);
    const [tools, setTools] = useState([ Intellij, eclipse, STS, visualStudioCode, netbean, github ]);

    return (
        <Fragment>
            <RedirectPage />
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
                                {frontEnd.map(tech => {
                                    console.log(tech);
                                    return <img src={tech} alt={tech} />
                                })}
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
                                {backEnd.map(tech => {
                                    return <img src={tech} alt={tech} />
                                })}                                
                            </div>
                        </div>
                        <div className="Technologies_Category">
                            <h4>Tools</h4>
                            <p>A programming tool or software development tool is a computer program that software developers use to create, debug, maintain, or otherwise support other programs and applications.</p>
                            <div className="TechList">
                                <h5>My Experience</h5>
                                {tools.map(tech => {
                                    return <img src={tech} alt={tech} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Technologies;