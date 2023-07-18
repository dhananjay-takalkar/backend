const {Schema} = require('mongoose');

const userSchema = new Schema([
  {
    fName:{
      type: String,
      required: true
    },
    lName:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true,
      hide: true
    },
    address:{
      type: String
    },
    contactNo:{
      type:String,
    },
  },{
    timestamp: true
  }
]);

module.exports = mongoose.model('user', userSchema);
