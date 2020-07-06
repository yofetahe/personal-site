import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Blog from './Blog';
// import BlogTech from './blogTech';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';
import { blogsContent } from './data/blogsList';
// import { blogsTechCategory } from './data/blogsTechCategory';

import './blogs.css';
import SearchIcon from '../images/search_icon.png';

const BlogsByTech = (props) => {

    const [blogs, setBlogs] = useState(blogsContent);
    const [searchFlag, setSearchFlag] = useState(false);
    // let techList = [];

    useEffect(() => {
        setBlogs(blogs.filter(blog => blog.category === props.match.params.tech));
    }, [props.match.params.tech]);

    function handleSearch() {
        setSearchFlag(false);
        var searchWord = document.getElementById('searchInput').value;
        if (searchWord === '') {
            setBlogs(blogsContent);
        } else {
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
            <div className="BackgroundText"> Blogs </div>
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

                <div className="bottomLine">
                    <Link id="backLink" to={`/Blogs`}>
                        &lt;&lt;&nbsp;Back | <span className="headerTitle"> {props.match.params.tech} </span>
                    </Link>
                </div>

                {blogs.map(blog => {
                    return <Blog blog={blog} />;
                })}
            </div>
        </div>
    </Fragment>
    );
}

export default BlogsByTech;