import React, { Fragment } from 'react';

import PageTitle from './PageTitle';
import './index_page.css';

import home_pic from '../images/home.jpg';

class Home extends React.Component {

    render(){
        return (
            <Fragment>
                <div id="otherPageContent" className="HidenContent"></div>
                <div id="homePageContent" className="PageContent">
                    <div className="BackgroundText">Home</div>
                    <div className="HomePic_Container">
                        <img id="home_pic" src={home_pic} alt="home_pic" />
                    </div>
                    {/* <PageTitle pageTitle=" HOME " /> */}
                    <div className="Introduction">
                        <h3 className="name">Yofetahe S. Habtu</h3>
                        <h5>I am a full stack developer</h5>
                        <h5><span id="initial">"</span>It is not enough to do your best: <br/> you must KNOW what to do, <br/> and THEN do your best." <br/> W.Edwards Deming</h5>
                    </div>
                </div>               
            </Fragment>
        );
    }
}

export default Home