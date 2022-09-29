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
            <th scope="col">No.</th>
            <th scope="col">title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <th scope="row" key={post.id}>
                {no++}
              </th>
              <td>{post.title}</td>
              <td>{post.body}</td>

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
