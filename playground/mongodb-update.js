//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('Unable to connect server');
    }
        console.log('Connected Succesfully');
    const db = client.db('TodoApp');
    // db.collection('Users').findOneAndUpdate({name: 'badal'},
    // {$set: {location:'sagar'}}).then( function(result){
    //     console.log(result);
    // }, function(err){
    //     console.log(" find failed");
    // });
    db.collection('Users').findOneAndUpdate({name: 'badal',location:'Hyderabad1'},
    {$set: {location:'sagar'}, $inc:{age:2}},{returnOriginal: false}).then( function(result){
        console.log(result);
    }, function(err){
        console.log(" find failed");
    });
    client.close();
});