/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idbook: {
      type: 'integer',
      autoIncrement: true,
      unique: true
    },
    name:{
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    status: {
      type: 'string',
      required: true
    },
    version: {
      type: 'string',
      required: true
    },
    publicationdate: {
      type: 'date'
    },
    isbn: {
      type: 'string'
    },
    path: {
      type: 'string',
      required: true,
      unique: true
    },
    category: {
      model: 'category'
    },
    editorial: {
      model: 'editorial'
    },
    activity: {
      collection: 'activity',
      via: 'book'
    },
    author: {
      collection: 'author',
      via: 'book',
      through: 'authorgroup'
    }
  },
  getBook: function (options, cb) {
    var findBy = {
      id: options.idbook
    }
    Book.findOne(findBy)
    .populate('author')
    .populate('activity')
    .exec(function (err, book){
      if(err) return cb(err);
      return cb(null, book);
    });
  },
  getBooks: function (options, cb) {

    Book.find()
    .populate('author')
    .populate('activity')
    .exec(function (err, books){
      if(err) return cb(err);
      return cb(null, books);
    });
  },
  addBook: function(options, cb) {

    Category.getCategory(options, function(error, category){
      if(error) return cb(error);
      Editorial.getEditorial(options, function(error, editorial){
        if(error) return cb(error);
        Author.getAuthor(options, function(error, author){
          if(error) return cb(error);
          User.getUser(options, function(error, user){
            if(error) return cb(error);
            var newBook = {
              name: options.name,
              description: options.description,
              status: +options.status,
              version: +options.version,
              publicationdate: options.publicationdate,
              isbn: options.isbn,
              path: options.path
            };
            console.log(newBook);
            Book.create(newBook).exec(function(error, book){
              if(error) return cb(error);
              category.book.add(book.id);
              editorial.book.add(book.id);
              author.book.add(book.id);
              category.save(function(error, category){
                if(error) return cb(error);
                editorial.save(function(error, editorial){
                  if(error) return cb(error);
                  author.save(function(error, author){
                    if(error) return cb(error);
                    var newActivity = {
                      typemove: 'U'
                    };
                    Activity.addActivity(newActivity, function(error, activity){
                      if(error) return cb(error);
                      book.activity.add(activity.id);
                      user.activity.add(activity.id);
                      user.save(function(error, user){
                        if(error) return cb(error);
                        book.save(function(error, bookActivity){
                            if(error) return cb(error);
                            return cb(null, book);
                        });
                      });
                    });

                  });
                });
              });
            });
          });
        });
      });
    });
  }
};
