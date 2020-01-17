import React, { Fragment } from 'react';

import PageTitle from './PageTitle';

import './aboutMe.css';

const AboutMe = () => {
    

    return (
        <Fragment>
            <div id="otherPageContent" className="HidenContent"></div>
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">About Me</div>
                <PageTitle pageTitle=" WHO AM I? " />            
                <div className="aboutme_content">
                    <span className="initialLetter">F</span>ull stack developer with 4+ years of web-based application 
                    development experience. Proactive learner, continuously improving skills and researching leading-edge 
                    tools to ensure relevant knowledge within constantly changing IT landscape. Determined to contribute 
                    value to the group or project I am working on. Work with my colleagues collaboratively to result in 
                    unified applications.
                </div>
            </div>            
        </Fragment>
    );
}

export default AboutMe;