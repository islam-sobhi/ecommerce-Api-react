import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const PostsList = ({ posts, name, deleteAction }) => {
  var no = 1;
  return (
    <div className="container">
      <h1> {name} </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">category</th>
            <th scope="col">#Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <th scope="row" key={post.id}>
              <img
                     className="img-thumbnail " 
                      src={post.image}
                      width="50"
                    />
              </th>
              <td className="align-middle text-justify">{post.title}</td>
              <td>{post.price}</td>
              <td>{post.category}</td>
              <td>{post.rating['count']} </td>
              <td>
                <button
                  onClick={() => deleteAction(post.id)}
                
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>

              <td>
                <Link
                  to={"/posts/"+post.id}
                  type="button"
                  className="btn btn-info"
                >
                  View
                </Link>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};
export default PostsList;
