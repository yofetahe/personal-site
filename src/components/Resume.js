import React, { Fragment } from 'react';

import PageTitle from './PageTitle';

import './resume.css';

import PDF from '../images/pdf.png';
import WORD from '../images/word.png'
import Resume_PDF from '../document/Yofetahe_Habtu_1_3_2020.pdf';
import Resume_WORD from '../document/Yofetahe_Habtu_1_3_2020.docx';

const Resume = () => {
    return (
        <Fragment>
            <div id="otherPageContent" className="HidenContent"></div>
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Resume</div>
                <PageTitle pageTitle=" DO YOU HAVE OPPORTUNITIES FOR ME? " />
                <div className="resume_content">
                    <div className="ResumeDownload">
                        <a href={Resume_WORD} target="_new">
                            <img src={WORD} alt="email" style={{width: "50px"}} /> 
                        </a>                        
                    
                        <a href={Resume_PDF} target="_new">
                            <img src={PDF} alt="linkedIn" style={{width: "40px"}} /> 
                        </a>            
                    </div>
                     <div className="ResumeContent"> 
                        <h4>Professional Experiance</h4>
                        <div>
                            <h5>Software Engineer, June 2019 till present <br/> HCL Technologies, WA, USA</h5>
                            <ul>
                                <li>
                                    Attend intensive training on front end (JavaScript, React, Angular and CSS) and 
                                    Java technologies (Java and Node.js) and also Cloud Infrastructure (Cloud Foundry, Azure and AWS)
                                </li>
                                <li>
                                    Develop sample project (Commercial site using React, Java and MySQL) at the end of the training 
                                    and deploy the app on cloud foundry.
                                </li>
                                <li>
                                    Shadow senior software engineers on the front-end features and back end functionality development
                                    using React and Java
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Software Engineer, March 2015 to April 2018 <br/> YamGet IT Solutions Plc - Addis Ababa, ETH</h5>
                            <ul>
                                <li>
                                Develop the common user authorization and authentication app for all company’s applications
                                </li>
                                <li>
                                Work on the back-end and front-end development, test and maintain applications.
                                </li>
                                <li>
                                Facilitated customization of best practices to adopt emerging standards for application development architecture and tools.
                                </li>
                                <li>
                                Participated in project presentations to end users and managers to make the software solutions easy-to-understand.
                                </li>
                                <li>
                                Help on major deals via generating well formatted presentation document of the applications.
                                </li>
                                <li>
                                Research, design, develop and implement scalable applications for clients
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Software Engineer, April 2014 – March 2015 <br/> Apposit LLC - Addis Ababa, ETH</h5>
                            <ul>
                                <li>
                                Fix bugs from the existing system and develop new features as per end users request
                                </li>
                                <li>
                                Work on the back-end development of application enhancement to a new version
                                </li>
                                <li>
                                Develop new sub project based on requirement document when a new firm join the platform.
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </Fragment>
    );
}

export default Resume;