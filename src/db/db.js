const mongoose = require('mongoose');

exports.mongoose.connect('mongodb://127.0.0.1:27017/test?retryWrites=true',{}).then(()=>{
console.log("Mongodb connected successully!!!");
}).catch((err)=>{
console.log("mongodb connection error");
});
