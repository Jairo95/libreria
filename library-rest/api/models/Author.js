/**
 * Author.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      required: true
    },
    nationality: {
      type: 'string'
    },
    book: {
      collection: 'book',
      via: 'author',
      through: 'authorgroup'
    }
  },
  getAuthors: function (options, cb) {
    Author.find()
    .populate('book')
    .exec(function (err, authors){
      if(err) return cb(err);
      return cb(null, authors);
    });
  },
  addAuthor: function(options, cb) {
    var newAuthor = {
      name: options.name,
      nationality: options.nationality
    }
    Author.create(newAuthor).exec(function(error, author){
      if(error) return cb(error);
      return cb(null, author);
      /*
      author.save(function(error, author){
        if(error) return cb(error);
        return cb(null, author);
      });*/
    });
  },
  getAuthor: function (options, cb) {
    var findBy = {
      id: options.idauthor
    }
    Author.findOne(findBy)
    .populate('book')
    .exec(function (err, author){
      if(err) return cb(err);
      return cb(null, author);
    });
  },
};
