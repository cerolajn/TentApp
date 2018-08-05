var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = ("./image_model");

var UserSchema = new Schema({
  user_name: String,
  user_surname: String
  //user_image:[Image],
  //added_place: Number,
  //rent_place: String,
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
