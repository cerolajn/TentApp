var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = ("./image_model");

var PlaceSchema = new Schema({
  place_name: String,
  place_owner: String,
  place_price:Number,
  place_image: [Image],
  availability:Boolean,
  start_day:Date,
  end_day:Date
    //add geo-location
});
var Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;

