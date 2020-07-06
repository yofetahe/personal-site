import React, { Fragment, useState } from 'react';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import ResumeExperience from './ResumeExperience';
import { experienceList } from './data/experienceList';

import './resume.css';

import PDF from '../images/pdf.png';
import WORD from '../images/word.png'
import Resume_PDF from '../document/Yofetahe_Habtu_Resume.pdf';
import Resume_WORD from '../document/Yofetahe_Habtu_Resume.docx';

const Resume = () => {

    const [experiance] = useState(experienceList);

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