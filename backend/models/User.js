import mongoose from "mongoose";
import bcrypt from "bcryptjs"; 


let userSchema = mongoose.Schema({
   name:{
    type:String,
    required : true
  },
  email:{
    type:String,
    required : true,
    unique : true,
    lowercase: true
  },
  password:{
    type:String,
    required : true,
    minlength:8
  },
  role:{
    type:String,
    enum: ["user", "admin"],
    default: "user"
  },
},
{ timestamps: true}

)



//--------------password security--------------//
userSchema.pre('save' , async function(next){
   if(!this.isModified('password')){
    return next()
   }

   this.password = await bcrypt.hash(this.password , 12)
   next()
})

//------------ custom security method-----------//
userSchema.methods.comparePassword = function(plainPassword){
    return bcrypt.compare(plainPassword , this.password)
}


//-------------- User Schema IMPORT----------//
let User = mongoose.model('User' , userSchema)

export default User