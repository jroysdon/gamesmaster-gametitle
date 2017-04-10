'use strict';

const express = require('express');
const service = express();
const request = require('superagent');
const parser = require('xml2json');

const mongo = require('../mongo/mongodb.js');

// function length(obj) {
//     return Object.keys(obj).length;
// }

service.get('/service/:gameTitle', (req, res, next) => {

    console.log('title :',req.params.gameTitle);

// function sessionStatus(callback){
//     $(document).ready(function(){
//         $.getJSON(scriptRoot + "sessionStatus.php", callback);
//     });
// }
// sessionStatus(function(s){alert(s);});



    mongo.readGame('gameLists', req.params.gameTitle, (err,response) => {
       console.log (' ------- err --------- ');
       console.log (err);
       console.log (' ------- response ----- ');
       console.log (response);

    });

    // ----- If No Game Titles are found, do an XML search on BGG and parse the XML into our DB





//     request.get('https://www.boardgamegeek.com/xmlapi/search?search=' + req.params.gameTitle,
//         (err, response) => {
//             if (err) {
//                 console.log(err);
//                 return res.sendStatus(404);
//             }
//             const SR = JSON.parse(parser.toJson(response.text));
//             const BG = SR.boardgames;
//             const BGS = BG.boardgame;
//             var gameList = "";
//             var cnt = 0;
//             var gameDoc = [];
//             for (var game in BGS) {
//                 gameDoc = [{
//                         bggGameID: BGS[game].objectid,
//                         gameName: BGS[game].name["$t"],
//                         gameYearPublished: BGS[game].yearpublished
//                     }
//                   ];
//                 mongo.create("gameLists", gameDoc);
//                 gameList = gameList + " " + BGS[game].name["$t"] + "(" + BGS[game].objectid + "),"
//                 cnt++;
//             }
//             res.json({
//                 result: `I found ${cnt} games :${gameList}`
//             });
//
//         });
});

module.exports = service;
