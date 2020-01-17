import React from 'react';

import './pagetitle.css';

const PageTitle = (props) => {
    return (
        <div className="DisplayPageTitle">
            <div className="Rotate"> 
                <span className="RotateTitle"> {props.pageTitle} </span> 
            </div>
        </div>
    );
}

export default PageTitle;