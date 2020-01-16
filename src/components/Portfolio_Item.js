import React from 'react';

import PortfolioTechUsed from './Portfolio_Tech_Used';

import './portfolio.css'

const PortfolioItem = (props) => {
    return (
        <div className="Project_Table">
            <div className="Project_Row">
                <div className="Project_Image Project_Cell">
                    <img src={props.project.image} alt={props.project.image} />
                </div>
                <div className="Project_Desc Project_Cell">
                    <div className="Project_Title">{props.project.title}</div>
                    <div>{props.project.project_description}</div>
                    <div className="ButtonList">
                        <a href={props.project.web_link} className="Button">View Site</a>
                        <a href={props.project.source_code_link} className="Button">View Source Code</a>
                    </div>
                    <span className="BuiltWith_Title">Built with</span>
                    <div style={{display: "flex"}}>                        
                        {props.project.built_with.map(tech => {
                            return <PortfolioTechUsed tech={tech} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;