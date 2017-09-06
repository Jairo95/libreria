/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getBooks: function(req, res){
		Book.getBooks(req, function(error, books){
			if(error){
				res.send({
					error: error
				});
			}
			return res.send({
				books: books
			});
		});
	},
	createBook: function(req, res){
		console.log(req);
		req.file('file').upload({
			dirname: '/home/docs'
		},function (err, uploadedFiles) {
			var options = req.query;
			if (err) return res.negotiate(err);
			uploadedFiles.map(function(file) {
					console.log(file);
					var infoBook ={
						name: options.name,
						description: options.description,
						status: options.status,
						version: options.version,
						publicationdate: options.publicationdate,
						isbn: options.isbn,
						iduser: options.iduser,
						idcategory: options.idcategory,
						ideditorial: options.ideditorial,
						idauthor: options.idauthor,
						path: file.fd
					}

					Book.addBook(infoBook, function(error, book){
		 			if(error){
		 				res.send({
		 					error: error
		 				});
		 			}
		 			return res.send({
		 				book: book
		 			});
		 		});
			});
		});
	}
};
