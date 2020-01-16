import React, { Fragment, useState } from 'react';

import PortfolioItem from './Portfolio_Item';

import PageTitle from './PageTitle';
import SMS from '../images/Projects/Project-SMS.png';

import './index_page.css';

const Portfolio = () => {

    const [works, setWorks] = useState([
        {
            image: {SMS},
            title: "School Managment System (SMS)", 
            project_description: "An application that enhance the administration of schools. It has a feature to manage student's, academic and non-academic staff teaching-learning related informations.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["Tech_1", "Tech_2"]
        },
        {
            image: "SMS", 
            title: "Project Title", 
            project_description: "Project Description", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["Tech_1", "Tech_2"]
        },
        {
            image: "SMS", 
            title: "Project Title", 
            project_description: "Project Description", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["Tech_1", "Tech_2"]
        },
        {
            image: "SMS", 
            title: "Project Title", 
            project_description: "Project Description", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["Tech_1", "Tech_2"]
        },
        {
            image: "SMS", 
            title: "Project Title", 
            project_description: "Project Description", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["Tech_1", "Tech_2"]
        }
    ]);

    return (
        <Fragment>
            <div id="otherPageContent" className="HidenContent"></div>
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Portfolio</div>
                <PageTitle pageTitle=" WHAT DID I DO? " />
                <div className="PortfolioList">
                    {works.map(project => {
                        return <PortfolioItem project={project} />
                    })}
                </div>
            </div>
        </Fragment>
    );
}

export default Portfolio;