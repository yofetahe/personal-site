import React, { Fragment } from 'react';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';

import gmail from '../images/email.png';
import linkedIn from '../images/linkedIn.png';
import github from '../images/github.png';

import './contactMe.css'

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name === '' || email === '' || message === '') {
        document.getElementById('submitMessage').innerHTML = "<span style=\"color: red\">Please provide a some content</span>"
    } else {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('submitMessage').innerHTML = "<span style=\"color: blue\">Thank you for contacting me.</span>";
    }
}

const ContactMe = () => {

    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Contact Me</div>
                <PageTitle pageTitle=" WHAT DO YOU HAVE IN MIND? " />
                <div className="contactMe_content">
                    <div className="ContactMeMedia">
                        <a href="mailto:yofetahe@gmail.com" target="_new">
                            <img src={gmail} alt="email" style={{ width: "50px" }} title="yofetahe@gmail.com" />
                        </a>

                        <a href="https://www.linkedin.com/in/yofetahe-habtu/" target="_new">
                            <img src={linkedIn} alt="linkedIn" style={{ width: "50px" }} title="https://www.linkedin.com/in/yofetahe-habtu/" />
                        </a>

                        <a href="https://github.com/yofetahe" target="_new">
                            <img src={github} alt="github" style={{ width: "50px" }} title="https://github.com/yofetahe" />
                        </a>
                    </div>
                    <div className="ContactMeForm">
                        <div id="submitMessage"></div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <br />
                                <input id="name" type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <br />
                                <input id="email" type="text" />
                            </div>
                            <div>
                                <label>Message</label>
                                <br />
                                <textarea id="message" rows="5"></textarea>
                            </div>
                            <input id="button" type="Submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactMe;