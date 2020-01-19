import React, {useState, useEffect} from 'react';

import PortfolioTechUsed from './Portfolio_Tech_Used';

import './portfolio_item.css'

const PortfolioItem = (props) => {

    const [image, setImage] = useState("");

    const loadImage = imageName => {
        console.log(imageName);
        import(`../images/Projects/${imageName}.png`).then(image => {
            console.log(image.default);
            setImage(image.default);
        })
    }

    useEffect(()=> {
        loadImage(props.project.image);
    },[]);

    return ( 
        <div className="Project_Table">            
            <div className="Project_Row">
                <div className="Project_Image Project_Cell">
                    <img id="projectImage" src={image} alt="image" />
                </div>
                <div className="Project_Desc Project_Cell">
                    <div className="Project_Title">{props.project.title}</div>
                    <div className="Project_Description">{props.project.project_description}</div>
                    <div className="ButtonList">
                        <a href={props.project.web_link} className="Button">View Site</a>
                        <a href={props.project.source_code_link} className="Button">View Source Code</a>
                    </div>
                    <span className="BuiltWith_Title">Built with</span>
                    <div class="TechUsedList">
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