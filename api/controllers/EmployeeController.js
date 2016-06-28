/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		var params = req.params.all();
		
		Employee.create({firstname: params.firstname, lastname: params.lastname}).exec(function createCB(err, created) {
			if (err) {
				return res.serverError(err);
			}
			
			return res.json({
				notice: 'Created employee with name ' + created.firstname + ' ' + created.lastname
			});
		});
	},
	
	get: function(req, res) {
		Employee.find({}).exec(function(err, data) {
			if (err) {
				return res.serverError(err);
			}
			
			return res.json(data);
		});
	}
};

