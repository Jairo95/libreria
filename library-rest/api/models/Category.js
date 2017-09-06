/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string'
    },
    description: {
      type: 'string'
    },
    book: {
      collection: 'book',
      via: 'category'
    }
  },
  addCategory: function(options, cb) {
    console.log(options.name);

    var newCategory = {
      name: options.name,
      description: options.description
    }
    console.log(newCategory);
    Category.create(newCategory).exec(function(error, category){
      if(error) return cb(error);
      console.log(category);
      return cb(null, category);
      /*category.save(function(error, category){
        if(error) return cb(error);
        return cb(null, category);
      });*/
    });
  },
  getCategories: function (options, cb) {
    Category.find()
    .exec(function (err, categories){
      if(err) return cb(err);
      return cb(null, categories);
    });
  },
  getCategory: function (options, cb) {
    var findBy = {
      id: options.idcategory
    };
    Category.findOne(findBy)
    .populate('book')
    .exec(function (err, category){
      if(err) return cb(err);
      return cb(null, category);
    });
  }


};
