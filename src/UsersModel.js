import React, { Component } from 'react';
import { useEffect, useState } from 'react';


const UsersModel = (url) => {

    const [users, setUser] = useState(null);
    const [serverError, setServerError] = useState(true);
    const [isWaiting, setIsWaiting] = useState()

    const deleteAction = (id) => {
        const updatedUsers = users.filter(user => user.id != id)
        setUser(updatedUsers)
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
                setUser(data)
                setIsWaiting(false)
            }).catch(er => {
                console.log(er.message)
                setServerError(er.message)
                setIsWaiting(false)
            })

    }, [url]
    )

    return {
        isWaiting, serverError, users, deleteAction
    }
}

export default UsersModel;