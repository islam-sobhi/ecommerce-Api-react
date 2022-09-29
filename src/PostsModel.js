import React, { Component } from 'react';
import { useEffect, useState } from 'react';


const PostsModel = (url) => {

    const [posts, setPost] = useState(null);
    const [serverError, setServerError] = useState(true);
    const [isWaiting, setIsWaiting] = useState()

    const deleteAction = (id) => {
        const updatedPosts = posts.filter(post => post.id != id)
         setPost(updatedPosts)
    }

    useEffect(() => {

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("Can't Connect to The Server")
                }
                return response.json();
            })
            .then(data => {
                
                console.log(data)
                setPost(data)
                setIsWaiting(false)
            }).catch(er => {
                console.log(er.message)
                setServerError(er.message)
                setIsWaiting(false)
            })

    }, [url]
    )

    return {
        isWaiting, serverError, posts, deleteAction
    }
}

export default PostsModel;