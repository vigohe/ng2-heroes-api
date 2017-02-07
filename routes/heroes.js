/**
 * Created by vigohe on 07-02-17.
 */

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function (req, res) {

    MongoClient.connect("mongodb://localhost:27017/app", function (err, db) {

        var collection = db.collection('Heroes');

        if(err){
            throw err;
        }else{
            console.log("Mongo Connected!");

            collection.find().toArray(function (err, heroe) {
                res.send(heroe);
            });



        }
    });
});

module.exports = router;