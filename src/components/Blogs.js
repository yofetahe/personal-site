import React, { Fragment, useState } from 'react';

import Blog from './Blog';
import BlogTech from './blogTech';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import { blogsContent } from './data/blogsList';
import { blogsTechCategory } from './data/blogsTechCategory';

import './blogs.css';
import SearchIcon from '../images/search_icon.png';

const Blogs = () => {

    const [blogs, setBlogs] = useState(blogsContent);
    const [blogsTech] = useState(blogsTechCategory);
    const [searchFlag, setSearchFlag] = useState(false);
    let techList = [];

    function handleSearch() {
        var searchWord = document.getElementById('searchInput').value;
        if (searchWord === '') {
            setSearchFlag(false);
            setBlogs(blogsContent);
        } else {
            setSearchFlag(true);
            const searchBlogContent = blogsContent.filter(blog => blog.searchKey.some(key => searchWord.toLowerCase() === key.toLowerCase()));
            setBlogs(searchBlogContent);
        }
    }

    // function handleSearchBasedOnTech(tech) {
    //     const searchBlogContent = blogsContent.filter(blog => blog.searchKey.some(key => tech.toLowerCase() === key.toLowerCase()));
    //     setBlogs(searchBlogContent);
    //     techList = [];
    //     setSearchFlag(true);
    // }

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

                {/* <div style={{ textAlign: "right", marginBottom: "10px" }}>
                    {!searchFlag && blogs.forEach(blog => {
                        if (!techList.includes(blog.category)) {
                            techList.push(blog.category);
                        }
                    })}
                    {techList.length > 0 && techList.sort().map(tech => {
                        return <span className="technologyTag" onClick={() => handleSearchBasedOnTech(tech)}> {tech} </span>;
                    })}
                    {techList.length === 0 && <span className="technologyTag" onClick={handleSearch}> Get All List </span>}
                </div> */}
                
                {!searchFlag && blogsTech.map(tech => {
                    return <BlogTech key={tech.id} tech={tech} />
                })}

                {searchFlag && blogs.map(blog => {
                    return <Blog key={blog.id} blog={blog} />;
                })}
            </div>
        </div>
    </Fragment>
    );
}

export default Blogs;