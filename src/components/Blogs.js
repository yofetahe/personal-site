import React, { Fragment, useState } from 'react';

import Blog from './Blog';

import PageTitle from './PageTitle';

import './index_page.css';
import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        { image: "image", title: "blog title 1", introduction: "introduction", full_content: "full content", create_date: "date" },
        { image: "image", title: "blog title 2", introduction: "introduction", full_content: "full content", create_date: "date" },
        { image: "image", title: "blog title 3", introduction: "introduction", full_content: "full content", create_date: "date" },
        { image: "image", title: "blog title 4", introduction: "introduction", full_content: "full content", create_date: "date" }
    ]);

    return (
        <Fragment>
            <div id="otherPageContent" className="HidenContent"></div>
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Blogs</div>
                <PageTitle pageTitle="WHICH TECHNOLOGY DID I STUDY? " />
                <div className="Blogs_List">
                    
                    {blogs.map(blog => {
                        return <Blog blog={blog} />;
                    })}
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Blogs;