/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    typemove:{
      type:'string',
      required:true
    },
    user: {
      model: 'user',
    },
    book: {
      model: 'book'
    }
  },
  addActivity: function(options, cb) {
    var newActivity = {
      typemove: options.typemove
    }
    Activity.create(newActivity).exec(function(error, activity){
      if(error) return cb(error);
      return cb(null, activity);
    });
  }
};
