import React from 'react';
import { Link } from 'react-router-dom';

import './blog.css';

const Blog = (props) => {
    return (
        <div className="Blog_Content">
            <div className="BlogImage">
                &nbsp;
            </div>
            <div className="BlogContent">
                <p id="title"> {props.blog.title} </p>
                <p id="introduction"> {props.blog.introduction} <Link id="readmore" to={`/BlogContent/${props.blog.id}`} > ...read more</Link> </p>
                <p id="date">Published: {props.blog.create_date} </p>
            </div>
        </div>
    );
}

export default Blog;