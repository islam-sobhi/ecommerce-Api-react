import { useParams } from "react-router-dom";
import PostsModel from "./PostsModel";
import React, { Component } from "react";
import { post } from "jquery";


    const About = () => {
        const { id } = useParams();
        const { isWaiting, serverError, posts } = PostsModel(
          "https://fakestoreapi.com/carts/5"
        );
   console.log(posts)

   return (
    <div>
      <br />
      <h1> PostInfo -  </h1>
      <br />

      {serverError && <h1>{serverError} ...</h1>}
      {isWaiting && <h1>Please wait to load data ...</h1>}

      {posts && (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-8">


                <img className="img-responvice" width="400" src={posts.image} />
              </div>
              <div className="col-4">

        

                <div className="p-3 right-side">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>{posts.id}</h3> <span className="heart"><i className='bx bx-heart'></i></span>
                    </div>
                    <div className="mt-2 pr-3 content">
                        <p> {posts.username}</p>
                    </div>
                    <h3>{posts.price} AED</h3>
                    <div className="ratings d-flex flex-row align-items-center">
                        <div className="d-flex flex-row"> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i
                                className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bx-star'></i> </div>
                                <span className="heading">Review   </span>
                               
                    </div>
                   
                    
                    <div className="buttons d-flex flex-row mt-5 gap-3"> <button className="btn btn-outline-dark">Buy
                            Now</button> <button className="btn btn-dark">Add to Basket</button> </div>
                            <div className="mt-2 pr-3 content">
                        <p>  {posts.email}</p>
                    </div>
                           
                    <div className="search-option"> <i className='bx bx-search-alt-2 first-search'></i>
                        <div className="inputs">  </div> <i className='bx bx-share-alt share'></i>
                    </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );

}
export default About;