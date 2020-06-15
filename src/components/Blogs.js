import React, { Fragment, useState } from 'react';

import Blog from './Blog';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';

import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        { 
            id: "1", 
            icon: "image", 
            title: "blog title 1", 
            introduction: "introduction", 
            full_content: "full content",
            images: [],
            create_date: "date" 
        },
        { 
            id: "2", 
            icon: "image",
            title: "blog title 2", 
            introduction: "introduction", 
            full_content: "full content",
            images: [],
            create_date: "date" 
        },
        { 
            id: "3", 
            icon: "image", 
            title: "blog title 3", 
            introduction: "introduction", 
            full_content: "full content", 
            images: [],
            create_date: "date" 
        },
        { 
            id: "4", 
            icon: "image", 
            title: "blog title 4", 
            introduction: "introduction", 
            full_content: "full content", 
            images: [],
            create_date: "date" 
        }
    ]);

    return (
        <Fragment>
            <RedirectPage />
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