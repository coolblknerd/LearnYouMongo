//  COUNT
//  Exercise 8 of 9

// Here we will learn how to count the number of documents that
// meet certain criteria.

// Use the parrots collection from the database named learnyoumongo to
// count all documents where age is greater than the first argument
// passed to your script.

// Using console.log, print the number to stdout.

// ----------------------

const mongo = require('mongodb').MongoClient,
      url = 'mongodb://localhost:27017/learnyoumongo',
      age = process.argv[2];
      
mongo.connect(url, function(e, db) {
    
    var collection = db.collection('parrots');
    
    collection.count({
        age: {
            $gt: +age
        }
    }, function(err, count){
        if(err) throw err;
        
        console.log(count)
        db.close();
    });
});