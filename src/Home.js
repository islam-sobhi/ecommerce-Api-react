import React, { Component }  from 'react';
import Posts from './Posts';

import wocommerce from './wocommerce'
const Home=()=>{

    const clickMe=()=>{
        console.log('Welcome');
    }

    const clickWithPar=(s)=>{
        console.log('welcome : '+s);
    }
    return(
<div className='container'>
                <h1>Welcome To Home Page</h1><br/>
                <Posts />
                <wocommerce />

            </div>
    );
            

    
}
export default Home;