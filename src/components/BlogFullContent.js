import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';

import './blogFullContent.css';

const BlogFullContent = (props) => {
    const blog = props.location.selectedBlog ? props.location.selectedBlog.blog : '';
    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent">

                <div className="BackgroundText">Blog</div>
                <PageTitle pageTitle={blog.title} />

                <div className="Blog_content">

                    <div className="bottomLine">
                        <Link id="backLink" to={`/Blogs`}>
                            &lt;&lt;&nbsp;Back | <span className="headerTitle"> {blog.title} </span>
                        </Link>
                    </div>

                    <div className="fullContent" dangerouslySetInnerHTML={{ __html: blog.full_content }}></div>

                </div>
            </div>
        </Fragment>
    );
}

export default BlogFullContent;