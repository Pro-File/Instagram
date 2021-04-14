import React from 'react'
import Avatar from '@material-ui/core/Avatar'
const Posts = () => {
    return (
        <div className="posts">
            
            <div className="post_Header">
            <Avatar className="post_Avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <h3 className="post_User">Roman Reigns</h3>
            </div>
            
            <img className="post_Image" src="https://img.freepik.com/free-psd/fire-logo_253059-60.jpg?size=626&ext=jpg"></img>
            
            <div className="post_Caption">
            <h4><strong>Muhammad Arbab</strong>: Yoo, it is instagram </h4>
            </div>
        </div>
    )
}

export default Posts
