const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

router.get('/', (req, res) => {
    res.render("/users/addOrEdit", {
        viewTitle: "Insert Users"
    });
});

router.post('/',(req,res)=> {
  if(req.body._id=='')
    insertRecord(req,res);
  else {
  updateRecord(req,res);
});

function insertRecord(req,res){
  var Users = new Users();
  Users.fullName = req.body.fullName;
  Users.email = req.body.email;
  Users.email = req.body.email;
  Users.mobile = req.body.mobile;
  Users.city = req.body.city;
  Users.save((err, doc) => {
      if (!err)
          res.redirect('users/list');
      else {
          if (err.name == 'ValidationError') {
              handleValidationError(err, req.body);
              res.render("/users/addOrEdit", {
                  viewTitle: "Insert Employee",
                  employee: req.body
              });
          }
          else
              console.log('Error during record insertion : ' + err);
      }
  });
}

function updateRecord(req,res){
  Users.findOneAndUpdate(_id:req.body._id),req.body,{
    if (!err) { res.redirect('/users/list'); } 
    else{
    if (!err.name== 'ValidationError'){
      handleValidationError(err,req.body);
      res.render("/users/addOrEdit",{
        viewTitle:'Update Employee',
        employee: req.body
      });
    }
    else 
    console.log('Error during record update:'+ err);
  }
});
}

router.get('/list',(req,res)=>{
  Users.find(err,docs)=>{
    if(!err){
      res.render("/user/list",{
        list:docs
      });
    }
  else{
    console.log('Error in retrieving employee list');
  }
});
});


function handleValidationError(){
  for(field in err.errors){
    switch (err.errors[field].path){
      case 'fullName':
        body['fullNameError'] = err.errors[field].message;
        break;
      case 'email':
        body['emailError'] = err.errors[field].message;
        break;
    default:
      break;
  }
}
}

router.get('/:id', (req,res)=>{
  Users.findById(req.params.id, (err,doc)=>{
    if(!err){
      res.render("users/addOrEdit",{
        viewTitle:"Update Employee",
        employee:doc
      });
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
          res.redirect('/users/list');
      }
      else { console.log('Error in employee delete :' + err); }
  });
});

module.exports = router;

