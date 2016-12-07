//  INSERT
//  Exercise 5 of 9

// Connect to MongoDB on port 27017.
// You should connect to the database named learnyoumongo and insert
// a document into the docs collection.

// The document should be a json document with the following properties:

//   * `firstName`
//   * `lastName`

// firstName will be passed as the first argument to the lesson.

// lastName will be passed as the second argument to the lesson.

// Use console.log to print out the object used to create the document.

// Make sure you use JSON.stringify convert it to JSON.

// -----------------------------

const mongo = require('mongodb').MongoClient,
    url = 'mongodb://localhost:27017/learnyoumongo';

var first = process.argv[2],
    last = process.argv[3],
    doc = {
        firstName: first,
        lastName: last
    };

mongo.connect(url, function(e, db) {
    if (e) throw e;

    var collection = db.collection('docs');

    collection.insert(doc, function(e, data) {
        if (e) throw e;

        var json = JSON.stringify(doc);

        console.log(json);

        db.closed();
    });

});