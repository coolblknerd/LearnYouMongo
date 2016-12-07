//  REMOVE
//  Exercise 7 of 9

// This lesson involves removing a document with the given _id.

// The database name will be accessible via process.argv[2].

// The collection name will be passed as the second argument to your script.

// The _id will be passed as the third argument to your script.

// -----------------------

const mongo = require('mongodb').MongoClient,
      database = process.argv[2],
      url = 'mongodb://localhost:27017/' + database;
      
mongo.connect(url, function(e, db){
    
   var collection = db.collection(process.argv[3]); 
   
   collection.remove({
       _id: process.argv[4]
   }, function(err) {
       if(err) throw err;
       db.close();
   })
});