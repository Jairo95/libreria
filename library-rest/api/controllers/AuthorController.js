/**
 * AuthorController
 *
 * @description :: Server-side logic for managing authors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAuthors: function(req, res){
		Author.getAuthors(req, function(error, authors){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				authors: authors
			});
		});
	},
	createAuthor: function(req, res){
		Author.addAuthor(req.query, function(error, author){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				author: author
			});
		});
	}

};
