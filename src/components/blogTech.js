import React from 'react';
import { Link } from 'react-router-dom';

import './blog.css';

const BlogTech = (props) => {
    return (
        <div className="Blog_Content">
            <div className="BlogImage">
                <img id="blogIcon" src={'/images/TechIcons/' + props.tech.icon + '.png'} alt={props.tech.icon} />
            </div>
            <div className="Blog">
                <div id="title">
                    <img id="blogSmallIcon" src={'/images/TechIcons/' + props.tech.icon + '.png'} alt={props.tech.icon} />
                    <span id="titleContent">{props.tech.techName}</span>
                </div>
                <p id="introduction"> {props.tech.techDefinition}</p>

                <p id="date">
                    <Link id="readmore" to={{
                        pathname: `/Blogs/${props.tech.techName}`,
                        selectedBlogs: { blog: props.tech.techName }
                    }}>
                        OPEN...
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default BlogTech;