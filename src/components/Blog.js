import React from 'react';

import './blog.css';

const Blog = (props) => {
    return (
        <div className="Blog_Content">

            <div className="BlogImage">
                &nbsp;
            </div>
            <div className="BlogContent">
                <p id="title"> {props.blog.title} </p>
                <p id="introduction"> {props.blog.introduction} <a href="/" > ...read more</a> </p>
                <p id="date">Published: {props.blog.create_date} </p>
            </div>
        </div>
    );
}

export default Blog;