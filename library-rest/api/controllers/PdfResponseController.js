/**
 * PdfResponseController
 *
 * @description :: Server-side logic for managing Pdfresponses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	downloadBook: function (req, res) {

		Book.getBook(req.query, function(error, book){
			if(error){
				return res.send({
					error: error
				});
			}
			if(!book){
				return res.send({
					error: "Libro no existente"
				})
			}

			var SkipperDisk = require('skipper-disk');
	    var fileAdapter = SkipperDisk();

	    // set the filename to the same file as the user uploaded
	    res.set("Content-disposition", "attachment; filename=123456789.pdf");

	    // Stream the file down
	    fileAdapter.read(book.path)
	    .on('error', function (err){
	      return res.serverError(err);
	    })
	    .pipe(res);
		});

	},
	/*
	req.file('avatar').upload({
	  dirname: require('path').resolve(sails.config.appPath, 'assets/images')
	},function (err, uploadedFiles) {
	  if (err) return res.negotiate(err);

	  return res.json({
	    message: uploadedFiles.length + ' file(s) uploaded successfully!'
	  });
	});
	*/
	/*
	uploadFile : function(req, res){
		console.log("upload");
		req.file('file').upload({
		  dirname: '/home/docs'
		},function (err, uploadedFiles) {
		  if (err) return res.negotiate(err);

		  return res.json({
		    message: uploadedFiles.length + ' file(s) uploaded successfully!'
		  });
		});

	},*/

	uploadFile : function(req, res){
		console.log("upload");
		req.file('file').upload({
			dirname: '/home/docs'
		},function (err, uploadedFiles) {
			if (err) return res.negotiate(err);
			//return res.json({
				//message: uploadedFiles.length + ' file(s) uploaded successfully!'
			//});
			uploadedFiles.map(function(file) {
					console.log(file);
			});
			return res.json({
				message: uploadedFiles.length + ' file(s) uploaded successfully!'
			});
		});

	},





	avatar: function (req, res){


	    var SkipperDisk = require('skipper-disk');
	    var fileAdapter = SkipperDisk();

	    // set the filename to the same file as the user uploaded
	    res.set("Content-disposition", "attachment; filename=documento.pdf");

	    // Stream the file down
	    fileAdapter.read('/home/docs/documento.pdf')
	    .on('error', function (err){
	      return res.serverError(err);
	    })
	    .pipe(res);
	}
};
