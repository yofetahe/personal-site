import React from 'react';

import './resume.css';

const ResumeExperience = (props) => {
    return (
        <div>
            <h5 id="experience_header">
                {props.experience.position}, {props.experience.startDate} - {props.experience.endDate} <br />
                {props.experience.company}, {props.experience.country}
            </h5>
            <ul>
                {props.experience.responsibilities.map(res => {
                    return <li>{res}</li>
                })}
            </ul>
        </div>
    );
}

export default ResumeExperience