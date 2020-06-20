import React, { Fragment, useState } from 'react';

import Blog from './Blog';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import { blogsContent } from './data/blogsList'

import './blogs.css';
import SearchIcon from '../images/search_icon.png';

const Blogs = () => {

    const [blogs, setBlogs] = useState(blogsContent);

    function handleSearch() {
        var searchWord = document.getElementById('searchInput').value;
        if (searchWord === '') {
            setBlogs(blogsContent);
        } else {
            const searchBlogContent = blogsContent.filter(blog => blog.title.toLowerCase().includes(searchWord.toLowerCase()));
            setBlogs(searchBlogContent);
        }
    }

    return (<Fragment>
        <RedirectPage />
        <div id="homePageContent"
            className="PageContent" >
            <div className="BackgroundText" > Blogs </div>
            <PageTitle pageTitle="TECHNOLOGIES I'M INTERESTED IN " />
            <div className="Blogs_List" >

                <div className="searchBlock" >
                    <input id="searchInput" className="searchInput" />
                    <div className="searchBtn">
                        <img src={SearchIcon} alt="Search" className="searchIcon" onClick={handleSearch} width="30" height="30" />
                    </div>
                </div >

                {blogs.map(blog => {
                    return <Blog blog={blog} />;
                })}
            </div>
        </div>
    </Fragment>
    );
}

export default Blogs;