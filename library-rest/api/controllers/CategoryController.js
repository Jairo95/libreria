/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getCategories: function(req, res){
		console.log(req.query);
		Category.getCategories(req.query, function(error, categories){
			if(error){
				res.send({
					error: error
				});
			}
			return res.send({
				categories: categories
			});
		});
	},

	createCategory: function(req, res){
		console.log(req.query);
		Category.addCategories(req.query, function(error, category){
			if(error){
				res.send({
					error: error
				});
			}
			return res.send({
				category: category
			});
		});
	}

};
