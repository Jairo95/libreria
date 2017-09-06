/**
 * Editorial.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      required:true
    },
    address:{
      type: 'string'
    },
    country:{
      type: 'string'
    },
    book:{
      collection: 'book',
      via: 'editorial'
    }
  },
  addEditorial: function(options, cb) {
    console.log(options.name);

    var newEditorial = {
      name: options.name,
      address: options.address,
      country: options.country
    }
    console.log(newEditorial);
    Editorial.create(newEditorial).exec(function(error, editorial){
      if(error) return cb(error);
      console.log(editorial);
      return cb(null, editorial);

    });
  },
  getEditorials: function (options, cb) {
    Editorial.find()
    .populate('book')
    .exec(function (err, editorials){
      if(err) return cb(err);
      return cb(null, editorials);
    });
  },
  getEditorial: function (options, cb) {
    var findBy = {
      id: options.ideditorial
    }
    Editorial.findOne(findBy)
    .populate('book')
    .exec(function (err, editorials){
      if(err) return cb(err);
      return cb(null, editorials);
    });
  }
};
