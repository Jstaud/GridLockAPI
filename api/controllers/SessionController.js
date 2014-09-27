/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	'new': function(req, res) {
		
		var d = new Date();
		var timeString = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + d.getDate() + ("0"+d.getHours()).slice(-2) + ("0"+d.getMinutes()).slice(-2) + ("0"+d.getSeconds()).slice(-2);
		
		
		var authObj = {
			authUser: 'NTxMadison007',
			authOrg: 'NTX_MADISON',
			authTime: timeString,
			authSecret: 'NTxMadison007',
			authSig: ''
		}
		
		// Call SensorLogic to get signature
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/auth/sign.json';
		
		// Add auth params
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSecret=' + authObj.authSecret;
		
		var http = require('http');
		http.request(apiCall, function(response) {
			var responseData = '';
			response.setEncoding('utf8');

			response.on('data', function(chunk){
				responseData += chunk;
			});
			response.once('error', function(err){
				res.serverError(err);
			});

			response.on('end', function(){
				authObj.authSig = responseData.slice(responseData.lastIndexOf('authSig=')+8, responseData.length - 15);
				
				// Store the auth info in session
				Session.create(authObj, function sessionCreated(err, newSession){
					if (err) {
						console.log(err);
					}
					// Save new session
					req.session.Session = newSession;
					res.send(newSession);
				});

			});
		}).end();

		
		
		
	}
};

