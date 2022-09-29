import { useParams } from "react-router-dom";
import PostsModel from './PostsModel';
import React, { Component } from "react";
import { post } from "jquery";
const PostInfo = () => {
    const {id} = useParams(); 
    const { isWaiting, serverError, posts } = PostsModel('https://jsonplaceholder.typicode.com/posts/' + id);  

    console.log(posts)
    return (

        <div>
            <br />
            <h1> PostInfo - {id}</h1><br/>

            {serverError && <h1>{serverError} ...</h1>}
            {isWaiting && <h1>Please wait to load data ...</h1>}

            {posts && (

                <div className="card text-center">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post Title: {posts.title}</h5>
                  <p className="card-text">Post Body: {posts.body}</p>
                  <a href="#" className="btn btn-primary">UserId: {posts.userId}</a>
                </div>
                <div className="card-footer text-muted">
                  2 days ago
                </div>
              </div>

            )
                
           }
        </div>

    );
}


export default PostInfo;