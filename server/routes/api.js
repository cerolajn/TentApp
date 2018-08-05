const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const app = express();
const router = express.Router();
const mongo = require('mongodb');
const bodyParser = require('body-parser');


var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/TentApp');

var Place = require("../models/place_model");
var User = require("../models/user_model");
var Image=("../models/image_model");

// Routes
//Place.methods(['get', 'put', 'post', 'delete']);
//Place.register(router, '/places');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));


router.route('/places')
     //POST a place /places
     .post(function(req,res){
       {
         // noinspection JSAnnotator
         var place = new Place({
             place_name = req.body.place_name,
             place_price = req.body.place_price,
             place_owner = req.body.place_owner,
             place_image = req.body.place_image,
             start_day = req.body.start_day,
             end_day = req.body.end_day,

         });
         console.log("place " + place);

         var response= {};

         place.save(function(err) {
            if (err){
            response = {"error" : true,"message" : "Error adding data"};;
            } else{
            response = {"error" : false,"message" : "Data added"};
            }
            res.json({ message: 'Place was created!', response: response });
        });
      }
    })

     //GET places /places
    .get(function(req,res) {

      var response = {};

      Place.find({}, function (err, data) {
        // Mongoo command to fetch all data from collection.
        if (err) {
          response = {"error": true, "message": "Error fetching data"};
        } else {
          response = {"error": false, "message": data};
        }
        res.json(response);
      });
    });

//GET  a place with special id
router.route("/places/:id")

        .get(function(req,res){

          var response = {};

          Place.findById(req.params.id,function(err,data){
          // This will run Mongoo Query to fetch data based on ID.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  response = {"error" : false,"message" : data};
              }
              res.json(response);
          });
        })
         //Update place with special id
        .put(function(req,res){
          var response = {};
          // first find out record exists or not
          // if it does then update the record
          Place.findById(req.params.id,function(err,data){
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
              // we got data from Mongo.
              // change it accordingly.
                  if(req.body.place_name !== undefined) {
                      // case where name needs to be updated.
                      data.place_name = req.body.place_name;
                  }
                  if(req.body.place_price !== undefined) {
                      // case where price needs to be updated
                      data.place_price = req.body.place_price;
                  }
                  if(req.body.place_owner !== undefined) {
                    // case where owner needs to be updated
                    data.place_owner = req.body.place_owner;
                  }
                  if(req.body.start_day !== undefined) {
                    // case where start day needs to be updated
                    data.start_day = req.body.start_day;
                 }
                 if(req.body.end_day !== undefined) {
                  data.end_day = req.body.end_day;
                 }
                  // case where end day needs to be updated
                  if(req.body.place_image !== undefined) {
                    // case where end day needs to be updated
                  data.place_image = req.body.place_image;
               }
                  // save the data
                  data.save(function(err){
                      if(err) {
                          response = {"error" : true,"message" : "Error updating data"};
                      } else {
                          response = {"error" : false,"message" : "Data is updated for "+req.params.place_id};
                      }
                      res.json(response);
                  })
              }
          });
      })
        .delete(function(req,res){
          var response = {};
        // find the data
           Place.findById(req.params.id,function(err,data){
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                // data exists, remove it.
                  Place.remove({_id : req.params.id},function(err){
                      if(err) {
                         response = {"error" : true,"message" : "Error deleting data"};
                      } else {
                         response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
                      }
                     res.json(response);
                   });
              }
           });
         });

module.exports = router;
app.use('/api', router);
