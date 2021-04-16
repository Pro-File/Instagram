import React, { useState } from "react";
import { connect } from 'react-redux';
import {addPost} from '../../Redux/Posts/postActions';

const Test = ({addPost}) => {
  var [caption, setCaption] = useState("");
  var [photo, setPhoto] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault();
    var postObj = {
      photo,
      caption,
    };
    addPost(postObj);
    // console.log(postObj);
  };
  return (
    <div>
      <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setCaption(e.target.value)}
          cols="30"
          rows="10"
          placeholder="description"
          value={caption}
        ></textarea>  <br/>
       
        <input onChange={(e) => setPhoto(e.target.files[0])} type="file" placeholder="Enter Photo" />
        <hr/> <button type="submit">ADD</button>
      </form>
    </div>
  );
};

var actions = ({
    addPost
})

export default connect(null,actions)(Test);
