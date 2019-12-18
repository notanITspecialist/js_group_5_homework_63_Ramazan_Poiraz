import React from 'react';
import './postListElem.css'

const PostListElem = props => {
    return (
        <li className='post-list-elem'>
            <span className='post-list-elem-date'>Created on: {props.date}</span>
            <span className='post-list-elem-title'><b>{props.title}</b></span>
            <button className='post-list-elem-button'>Read more</button>
        </li>
    );
};

export default PostListElem;