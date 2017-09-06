/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUsers: function(req, res){
		console.log(req.query);
		User.getUsers(req.query, function(error, users){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				users: users
			});
		});
	},

	createUser: function(req, res){
		console.log(req.query);
		User.addUser(req.query, function(error, user){
			if(error){
				return res.send({
					error: error
				});
			}
			return res.send({
				user: user
			});
		});
	},

	validateuser: function(req, res){
		User.getUserByUsernameAndPassword(req.query, function(error, user){
			if(error){
				return res.send({
					error: error
				});
			}
			if(!user){
				return res.send({
					error: 'incorrect'
				});
			}
			return res.send({
				response: 'OK',
				idUser: user.id
			});

		});
	}


};
