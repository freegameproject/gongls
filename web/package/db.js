MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
mongoUrl = 'mongodb://localhost:27017/g';


db={
  title:'haha',
  conn:function(callback,callback_err){
    MongoClient.connect(mongoUrl, function (err, db) {
      if(err){
        callback_err();
      }else{
        callback();
      }
      //assert.equal(null, err);
    });
    console.log(mongoUrl);
  },
  add:function(table,obj,callback){
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        db.collection(table).insertOne(obj, function (err, result) {
            assert.equal(err, null);
            //res.json(result);
            //callback(result);
            callback(result.ops[0]._id);
            db.close();
        });
    });
  },
  getCount:function(table,callback){
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        db.collection(table).find({}).toArray(function (err, arr) {
          callback(arr.length);
          db.close();
        });
    });
  }
}
module.exports = db;
