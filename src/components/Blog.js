import React from 'react';
import { Link } from 'react-router-dom';

import './blog.css';

const Blog = (props) => {
    return (
        <div className="Blog_Content">            
            <div className="Blog">
                <div id="title">                    
                    <span id="titleContent">{props.blog.title}</span>
                </div>
                <p id="introduction"> {props.blog.introduction}</p>

                <p id="date">
                    <Link id="readmore" to={{
                        pathname: `/BlogContent/${props.blog.id}`,
                        selectedBlog: { blog: props.blog }
                    }}>
                        Read more...
                    </Link>
                    <span style={{float: "right"}}> {props.blog.create_date} | <i>{props.blog.time} read</i> </span>
                </p>
            </div>
        </div>
    );
}

export default Blog;