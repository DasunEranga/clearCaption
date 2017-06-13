var util = require('util');
var {Router} = require('express');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
var request = require('request');
var graph = require('fbgraph');
var FB = require('facebook-node');
FB.setApiVersion("v2.9");

import { GlobalVariable } from '../app/globals';

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded 
var _wpBase = GlobalVariable.BASE_API_URL;
var _client_id = GlobalVariable.Client_ID;
var _client_secret = GlobalVariable.Client_Secret;
var _FBAT = GlobalVariable.FB_ACCESS_TOKEN;
var _FBAPPID = GlobalVariable.FB_APP_ID;
// API

export function sforceApi() {

  var router = Router()
  router.route('/fbevents')
    .get(function(req, res) {
        // extend fb token
        var accessToken;

        // FB.api('oauth/access_token', {
        //     client_id: _client_id,
        //     client_secret: _client_secret,
        //     grant_type: 'fb_exchange_token',
        //     fb_exchange_token: _FBAT
        // }, function (res) {
        //     if(!res || res.error) {
        //         console.log(!res ? 'error occurred' : res.error);
        //         return;
        //     }
            
        //     accessToken = res.access_token;
        //     var expires = res.expires ? res.expires : 0;
        // });

        FB.setAccessToken(_FBAT);
        
       FB.api('me', { fields: ['events'] }, function (resp) {
        if(!resp || resp.error) {
            console.log(!resp ? 'error occurred' : resp.error);
            return;
        }
       // console.log(JSON.stringify(resp));
         return res.json(resp);
        });
       
    });

    //salese force api
  router.route('/sforce')
    .post(function(req, res) {

     console.log('POST', util.inspect(req.body, {colors: true}));
      var _data = [];
     _data['first_name'] = req.body.firstName;
     _data['last_name'] = req.body.lastName;
     _data['tp'] = req.body.phoneNumber;
     _data['email'] = req.body.emailAddress;
     _data['contact_form'] = req.body.formname;

    if(req.body.message)
     _data['message'] = req.body.firstName;
    if(req.body.department)
     _data['department'] = req.body.firstName;

    //  console.log(_data);
    //  console.log(_wpBase);
     
     var request = require('request');

    // Set the headers
    var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded'
    }
    
    // Configure the request
    var options = {
        url: _wpBase+'825app/add',
        method: 'POST',
        headers: headers,
        form: _data
    }
    
    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log(body)
        }
    })
    
    

      return res.status(200).end();
    });

  return router;
};