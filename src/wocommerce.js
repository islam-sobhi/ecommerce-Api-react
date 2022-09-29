import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import PostsList from './PostsList'
import PostsModel from './PostsModel'



var WooCommerceAPI = require('react-native-woocommerce-api');
 
var WooCommerceAPI = new WooCommerceAPI({
  url: 'https://theluxefleet.com',// Your store URL
  ssl: true,
  consumerKey: 'ck_c421a56b1c59bee9edaba00cca66313619baa7db', // Your consumer secret
  consumerSecret: 'cs_ebd43aa03bc10fad497709a2430b754f71bab72d', 
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2', // WooCommerce WP REST API version
  queryStringAuth: true
});



WooCommerceAPI.get('products')
          .then(data => {
            console.log('Welcome to Wocoomerce');
          	console.log(data);
          })
          .catch(error => {
          	console.log(error);
          });
          


          export default WooCommerceAPI;

