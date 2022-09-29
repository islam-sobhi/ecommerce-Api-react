import React, { Component } from 'react';
import { useState } from 'react';
const PostsList = ({posts,deleteAction}) => {
    

    var no=1;
    return (
      
        <div className='container'>
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">title</th>
                    <th scope="col">Body</th>
                  
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                {
           posts.map((post)=>(
                <tr>
                     <th scope="row" key={post.id}>{no++}</th>
                     <td>{post.title}</td>
                     <td>{post.body}</td>
                  
                     <td><button onClick={()=>deleteAction(post.id)} type="button" className="btn btn-danger">Delete</button></td>

                    </tr>
            ))
           
            
        }
            
            </tbody>
        </table>

    </div>

    );



}
export default PostsList;