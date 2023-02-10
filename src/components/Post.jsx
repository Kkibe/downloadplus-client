import { TimelapseOutlined } from '@mui/icons-material';
import React from 'react';

const Post = ({post}) => {
    return (
        <a href={post.url} className='post' target='_blank'>
            <div className="image-container">
                <img src={post.urlToImage} alt="" />
            </div>
            <h3>{post.title}</h3>
            <div className="content">
                    {post.description}
            </div>
            <div className="info">
                <span>By: <span>{post.author}</span> </span>
                <span><TimelapseOutlined />{new Date().toDateString(post.pubslishedAt)}</span>
            </div>
        </a>
    );
}

export default Post;