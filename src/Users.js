import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import UsersList from '././UsersList';
import UsersModel from './UsersModel';
const Users = () => {

    
//https://jsonplaceholder.typicode.com/posts
//  https://theluxefleet.com/wp-json/wc/v3/orders/?consumer_key=ck_c421a56b1c59bee9edaba00cca66313619baa7db&consumer_secret=cs_ebd43aa03bc10fad497709a2430b754f71bab72d
const {isWaiting, serverError, users, deleteAction}= UsersModel('https://fakestoreapi.com/users/');

            
    const [posts1, setPost1] = useState(
        [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            },
            {
                "userId": 1,
                "id": 6,
                "title": "dolorem eum magni eos aperiam quia",
                "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            },
            {
                "userId": 1,
                "id": 7,
                "title": "magnam facilis autem",
                "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
            },
            {
                "userId": 1,
                "id": 8,
                "title": "dolorem dolore est ipsam",
                "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
            },
        ]
    );

    var no = 1;

    //const [isWaiting, setIsWaiting] = useState(true);
    
    return (

        <div className='container'>
            {serverError && <h1>{serverError}</h1>}
            {(isWaiting && <h1>Please wait to load data</h1>)}
            {users && < UsersList users={users} name="Users" deleteAction={deleteAction} />}

        </div>
    );



}
export default Users;