import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
const Posts = ({username, url, caption}) => {


    return (
        <div className="posts">
            
            <div className="post_Header">
            <Avatar className="post_Avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <h3 className="post_User">{username}</h3>
            </div>
            
            <img className="post_Image" src={url}></img>
            
            <div className="post_Caption">
            <h4><strong>{username}</strong>: {caption} </h4>
            </div>
        </div>
    )
}

export default Posts
