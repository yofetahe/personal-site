import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import RedirectPage from './RedirectPage';

const linkStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "5px 15px",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "rgba(112, 112, 112, 0.5)"
}

const h1Style = {
    fontSize: "80px",
    lineHeight: "1"
}

const PageNotFound = () => {
   
    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent" style={{textAlign: "center", paddingTop: "50px"}}>
                <p>OOPS! PAGE NOT FOUND</p>
                <p style={h1Style}>404</p>
                <p>I am sorry, the page you requested was not found</p>
                <Link id="homeLink" to="/" style={linkStyle}>Go to HOME</Link>
            </div>
        </Fragment>
    );
}

export default PageNotFound;