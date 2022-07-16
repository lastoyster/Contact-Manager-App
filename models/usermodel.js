const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    Petname: {
        type: String
    }
});

userSchema.path('email').validate((val)=>{
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;>()\[\]\\.,;:\s@"]+)*)
 return emailRegex.test(val);
}, 'Invalid e-mail');
    
mongoose,model('Users',userSchema);
