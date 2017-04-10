'use strict';

var MongoClient = require('mongodb').MongoClient,
    test = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/gameLists';

function create(db, data) {
    MongoClient.connect(url, function(err, db) {
        test.equal(null, err);
        var collection = db.collection('gamesLists');
        collection.insert(data, function(err, r) {
        });
        db.close();
        return;
    })
}

  function readGame(col, data) {
    // MongoClient.connect(url, function(err, db) {
    //     // test.equal(null, err);
    //     // console.log('-db-');
    //     // console.log(db);
    //     var collection = db.collection(col);
    //     // console.log('-----db-----');
    //     // console.log(db);
    //     // console.log('-----collection-----');
    //     // console.log(collection);
    //
    //     collection.find({
    //         'gameName': data
    //     }).toArray(function(err, docs) {
    //         // test.equal(null, err);
    //         // test.notEqual(0, docs.length);
    //         console.log('-err-');
    //         console.log(err);
    //         console.log(docs.length);
    //         console.log(docs);
    //         return result;
    //     })
    // })
    var result = "good";
    return result;
}

function update(db, data) {

    return "update"

}

function remove(db, data) {

    return "removed"

}






// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db, action, data) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   // if err{
//   //   console.log('--- Error connecting to DB ---')
//   //   console.log(err)
//   //   return;
//   // }
//   var collection = db.collection('gamesLists');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     // assert.equal(err, null);
//     // assert.equal(3, result.result.n);
//     // assert.equal(3, result.ops.length);
//     // console.log("Inserted 3 documents into the document collection");
//     // callback(result);
//   });
//   db.close();
// });




// MongoClient.insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// }

// var updateDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });
// }
//
// var deleteDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.deleteOne({ a : 3 }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Removed the document with the field a equal to 3");
//     callback(result);
//   });
// }
//
// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     assert.equal(2, docs.length);
//     console.log("Found the following records");
//     console.dir(docs);
//     callback(docs);
//   });
// }
module.exports = {
    create,
    readGame,
    update,
    remove
};
