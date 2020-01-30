import React, { Fragment, useState } from 'react';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import ResumeExperience from './ResumeExperience';

import './resume.css';

import PDF from '../images/pdf.png';
import WORD from '../images/word.png'
import Resume_PDF from '../document/Yofetahe_Habtu_Resume.pdf';
import Resume_WORD from '../document/Yofetahe_Habtu_Resume.docx';

const Resume = () => {

    const [experiance, setExperiance] = useState([
        { 
            id: "1",
            position: "Software Engineer", 
            startDate: "June 2019", 
            endDate: "present", 
            company: "HCL Technologies", 
            country: "WA, USA",
            responsibilities: [
                "Shadow senior software engineers on the front-end features developments using React, React-hook and React-Context and backend functionality development using Java, spring boot, and hibernate.",
                "Participate on in house project development on the back end development using java and spring boot.",
                "Development on front end (JavaScript, Typescript, React, Angular and CSS) and backend technologies (Java, C# and Node.js) and also deploy applications on Cloud Infrastructure (Cloud Foundry, Azure and AWS) and develop personal project (commercial site using React, Java and MySQL) and deploy on cloud foundry."
            ]
        },
        { 
            id: "2",
            position: "Software Engineer", 
            startDate: "March 2015", 
            endDate: "April 2018", 
            company: "YamGet IT Solutions PLC", 
            country: "Addis Ababa, Ethiopia",
            responsibilities: [
                "Develop the common user authorization and authentication app for all company’s applications",
                "Work on the back-end and front-end development, test and maintain applications.",
                "Facilitated customization of best practices to adopt emerging standards for application development architecture and tools.",
                "Participated in project presentations to end users and managers to make the software solutions easy-to-understand.",
                "Help on major deals via generating well formatted presentation document of the applications.",
                "Research, design, develop and implement scalable applications for clients"
            ]
        },
        { 
            id: "3",
            position: "Software Engineer", 
            startDate: "April 2014", 
            endDate: "March 2015", 
            company: "Apposit LLC", 
            country: "Addis Ababa, Ethiopia",
            responsibilities: [
                "Fix bugs from the existing system and develop new features as per end users request",
                "Work on the back-end development of application enhancement to a new version",
                "Develop new sub project based on requirement document when a new firm join the platform."
            ]
        }
    ]);

    return (
        <Fragment>
            {/* <div id="otherPageContent" className="HidenContent"></div> */}
            <RedirectPage />
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
                        {experiance.map(exp => {
                            return <ResumeExperience key={exp.id} experience={exp} />
                        })}
                    </div>
                </div> 
            </div>
        </Fragment>
    );
}

export default Resume;