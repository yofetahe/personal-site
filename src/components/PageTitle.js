import React from 'react';

import './index_page.css';

const PageTitle = (props) => {
    return (
        <div className="DisplayPageTitle">
            <div className="inner">
                <div className="Rotate"> 
                    <span className="RotateTitle"> {props.pageTitle} </span> 
                </div>
            </div>
        </div>
    );
}

export default PageTitle;