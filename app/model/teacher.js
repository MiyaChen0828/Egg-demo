module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      name: { type: String, required: true },
      age: { type: Number},
      gender:{type : String, enum:['男','女']},
      phone:{
          type:String,
            validate: {
              validator: function(v) {
                if(v.length < 8){
                  return false
                }
              },
              message: '${v} is not a valid phone number!'
            }, 
          }
    });
    return mongoose.model('Teacher', UserSchema,'teacher');
  }