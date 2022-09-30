import React, { Component } from "react";
import { useEffect, useState } from "react";

const Create = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [waitingServer, setWaitingServer]= useState(false)


  const mySubmit = (e) => {
    e.preventDefault();
    const mypost = {
      title,
      body,
      userId,
    };
    setWaitingServer(true)
setTimeout(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        mypost,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(()=>{
        console.log("New Post Added");
        setWaitingServer(false)
      }
    
      );
 }, 2000);
  }
  return (
    <div className="container">
      <h1 className="text-center">Create Product</h1>
      <form method="POST" onSubmit={mySubmit}>
        <div className="form-row container">
          <div className="form-group col-md-6">
            <label for="inputEmail40">User ID</label>
            <input
              type="text"
              name="userId"
              className="form-control"
              id="inputEmail40"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <br></br>
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="inputEmail4"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
          </div>

          <div className="form-group col-md-6">
            <label for="inputPassword4">Body</label>
            <input
              type="text"
              name="postBody"
              className="form-control"
              id="inputPassword4"
              placeholder="Body"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <br></br>
         { !waitingServer && <button type="submit" className="btn btn-success">
            Create
          </button>}

          { waitingServer && <button disabled type="submit" className="btn btn-success">
            Please waiting server
          </button>}

        </div>

        <br />
        <h1>{userId} </h1>
        <h1>{title} </h1>
        <h1>{body} </h1>
      </form>
    </div>
  );
};

export default Create;
