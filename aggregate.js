//  AGGREGATE
//  Exercise 9 of 9

// Next up is aggregation. Aggregation allows one to do things like
// calculate the sum of a field of multiple documents or the average
// of a field of documents meeting particular criteria.

// Say you have a collection named prices. Each price document is modeled
// like so:

//     {
//       "name": "Tshirt",
//       "size": "S",
//       "price": 10,
//       "quantity": 12
//       "meta": {
//         "vendor": "hanes",
//         "location": "US"
//       }
//     }

// In this exercise, we need to calculate the average price for all documents
// in the prices collection in the database named learnyoumongo that have
// the size that will be passed as the first argument to your script.

// Use console.log() to print the average price rounded to 2 decimal places
// to stdout after you have found it.

// ----------------------------

const mongo = require('mongodb').MongoClient,
   url = 'mongodb://localhost:27017/learnyoumongo';

var size = process.argv[2];

mongo.connect(url, function(e, db){
   var prices = db.collection('prices');

   prices.aggregate([{
      $match: {
         size: size
      }
   }, {
      $group: {
         _id: 'average',
         average: {
            $avg: '$price'
         }
      }
   }]).toArray(function(err, results) {
      if (err) throw err;

      var avg = results[0].average.toFixed(2);
      console.log(avg);
      db.close();
   });
});
