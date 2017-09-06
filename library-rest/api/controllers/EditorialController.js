/**
 * EditorialController
 *
 * @description :: Server-side logic for managing editorials
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getEditorials: function(req, res){
		console.log(req.query);
		Editorial.getEditorials(req.query, function(error, editorials){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				editorials: editorials
			});
		});
	},

	createEditorial: function(req, res){
		console.log(req.query);
		Editorial.addEditorial(req.query, function(error, editorial){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				editorial: editorial
			});
		});
	}

};
