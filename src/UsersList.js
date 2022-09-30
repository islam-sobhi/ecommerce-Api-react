import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const UserList = ({ users, name, deleteAction }) => {
  var no = 1;
  console.log(users);
  console.log(users.id);
  return (
    
    
    
<div>
    <div className="container">
      <h1> Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">Full Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row" key={user.id}>
              {user.id}
              </th>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.address['city']}</td>
              <td>  {user.name['firstname']} + {user.name['lastname']}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => deleteAction(user.id)}
                
                  className="btn btn-danger"
                >
                  Delete
                </button> 
               
              </td>
              <td>
              <Link
                  to={"/users/"+user.id}
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
    </div>
  );

};
export default UserList;
