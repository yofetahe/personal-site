import React, { Fragment, useState } from 'react';

import Blog from './Blog';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import { blogsContent } from './blogContent/blogsList'

import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState(blogsContent);

    function handleSearch() {
        var searchWord = document.getElementById('searchInput').value;
        if(searchWord === '') {
            setBlogs(blogsContent);
        } else {
            const searchBlogContent = blogsContent.filter(blog => blog.title.toLowerCase().includes(searchWord.toLowerCase()));
            setBlogs(searchBlogContent);
        }
    }

    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Blogs</div>
                <PageTitle pageTitle="WHICH TECHNOLOGY DID I STUDY? "/>
                <div className="Blogs_List">

                    <div className="searchBlock">
                        <input id="searchInput" className="searchInput" /><div onClick={handleSearch} className="searchBtn">Search</div>
                    </div>

                    {blogs.map(blog => {
                        return <Blog blog={blog} />;
                    })}
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Blogs;