import './App.css';
import {useEffect, useState} from 'react';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Test from './Components/Test/Test'
import React from 'react'
import {firestore} from './Firebase'
import { fetchPosts } from './Redux/Posts/postActions';
import { connect } from 'react-redux';

function App({fetchPosts}) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    firestore.collection('posts').onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => doc.data()));
    })
    fetchPosts()
  }, [])
  // console.log(posts)
  return (
    <div className="App">
      <Header/>
      <Test/>
      {posts.map(post=>{
         return <Posts key={post.id} username={"ARBAB"} url={post.photo} caption={post.caption}/>
      }) 
    }
    </div>
  );
}

var actions = ({
  fetchPosts,
})

export default connect(null,actions)(App);
