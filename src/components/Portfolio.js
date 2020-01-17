import React, { Fragment, useState } from 'react';

import PortfolioItem from './Portfolio_Item';

import PageTitle from './PageTitle';

import './portfolio.css';

const Portfolio = () => {

    const [works, setWorks] = useState([
        {
            image: "SMS",
            title: "School Managment System (SMS)", 
            project_description: "An application that enhance the administration of schools. It has a feature to manage student's, academic and non-academic staff teaching-learning related informations.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["HTML", "CSS", "JavaScript", "java", "jQuery", "ajax", "mysql", "github"]
        },
        {
            image: "RelaxYourFinger", 
            title: "Relax-Your-Finger", 
            project_description: "A game app on typing speed. Users register and compete with their friends. The app shows each player typing status and if the player is registered user, it will save the record of the player.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["HTML", "CSS", "JavaScript", "materialize", "angular", "expressjs", "nodejs", "socket", "mongodb", "github"]
        },
        {
            image: "NetFix", 
            title: "NetFix", 
            project_description: "An application to get all our movie entertainment in one place. The idea is copied from NetFlix. It has a feature to create page for each user and display available movies verses seen movies list.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["HTML", "CSS", "JavaScript", "jQuery", "csharp", "dotnet", "mysql", "github"]
        },
        {
            image: "Look4Me", 
            title: "Look-4-Me", 
            project_description: "It is a web based dating app. Users create an account and the app filter from members based on the logged in user interest. It also incorporate messaging between members. Beside this, logged in user can search others beyond his/her initial interest.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["HTML", "CSS", "JavaScript", "python", "django", "sqlite", "github"]
        },
        {
            image: "JobLessNess", 
            title: "Job-Less-Ness", 
            project_description: "An application to graphically represent unemployment rate of USA for the last 10 years (2009 - 2018). It generate a report at the state level and per state's county. The app uses HighChart.js library to generate the graph reports.", 
            web_link: "Web Link", 
            source_code_link: "Source Code Link", 
            built_with: ["HTML", "CSS", "JavaScript", "jQuery", "csharp", "dotnet", "mysql", "github"]
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