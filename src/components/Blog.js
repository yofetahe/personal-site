import React from 'react';
import { Link } from 'react-router-dom';

import './blog.css';

const Blog = (props) => {
    return (
        <div className="Blog_Content">
            <div className="BlogImage">
                <img id="blogIcon" src={'/images/TechIcons/' + props.blog.category + '.png'} alt={props.blog.category} />
            </div>
            <div className="Blog">
                <p id="title"> {props.blog.title} </p>
                <p id="introduction"> {props.blog.introduction}
                    <Link id="readmore" to={{ 
                        pathname: `/BlogContent/${props.blog.id}`, 
                        selectedBlog: { blog: props.blog } 
                    }}>
                        ...read more
                    </Link>
                </p>
                <p id="date"> {props.blog.create_date} | <i>{props.blog.time} read</i> </p>
            </div>
        </div>
    );
}

export default Blog;