//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
        return console.log('Unable to connect server');
    }
        console.log('Connected Succesfully');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // } );

//         db.collection('Users').insertOne({
//         name: 'badal',
//         age: 26,
//         location: 'Hyderabad'
//     }, (err,result) => {
//         if(err){
//             return console.log('Unable to insert documents');
//         }
// //        console.log(JSON.stringify(result.ops, undefined, 2));
//         console.log(result.ops[0]._id.getTimestamp());

//     } );

    // var user = {
    //             name: 'badal',
    //             age: 26,
    //             location: 'Hyderabad'
    //         };
    // var {name} = user;
    // console.log(name) ;
    // console.log(user) ;

    // var obj = new ObjectID();
    // console.log(obj);   
        db.collection('Users').find({}).toArray().then( function(result){
            console.log(result);
        }, function(err){
            console.log(" find failed");
        }
        
        
        );
    //client.close();
});