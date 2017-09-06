/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    name:{
      type:'string',
      required:true
    },
    lastname:{
      type:'string'
    },
    username:{
      type:'string',
      unique:true,
      required:true
    },
    status:{
      type:'string',
      required:true
    },
    password:{
      type:'string',
      minLength: 6,
      required:true
    },
    address:{
      type:'string'
    },
    phone:{
      type:'string'
    },
    activity:{
      collection: 'activity',
      via: 'user'
    }
  },

  getUsers: function (options, cb) {
    User.find()
    .populate('activity')
    .exec(function (err, users){
      if(err) return cb(err);
      return cb(null, users);
    });
  },
  getUser: function (options, cb) {
    var findBy = {
      id: options.iduser
    }
    User.findOne(findBy)
    .populate('activity')
    .exec(function (err, user){
      if(err) return cb(err);
      return cb(null, user);
    });
  },
  getUserByUsernameAndPassword: function (options, cb) {
    var findBy = {
      username: options.username,
      password: options.password
    }
    User.findOne(findBy)
    .exec(function (err, user){
      if(err) return cb(err);
      return cb(null, user);
    });
  },
  addUser: function(options, cb) {
    var newUser = {
      name: options.name,
      lastname: options.lastname,
      username: options.username,
      status: options.status,
      password: options.password,
      address: options.address,
      phone: options.phone
    }
    User.create(newUser).exec(function(error, user){
      if(error) return cb(error);
      return cb(null, user);
      /*
      author.save(function(error, author){
        if(error) return cb(error);
        return cb(null, author);
      });*/
    });
  },
};
