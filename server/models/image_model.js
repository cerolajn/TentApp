var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  image_name:String,
  url : String
});

var Image = mongoose.model('Place', ImageSchema);
module.exports = Image;
