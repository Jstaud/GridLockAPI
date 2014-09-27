/**
* SensorController
*
* @description :: Server-side logic for managing sensors
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

module.exports = {
	
	'create': function(req, res) {
		
	},
	
	'FindAll': function(req, res) {
		TrafficLight.find(function foundTrafficLight(err, trafficLights) {
			res.send(trafficLights);
		})
	},
	
	'find': function(req, res) {
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/deviceState/get.json';
			
		var authObj = req.session.Session;

		var http = require('http');
		http.request(url, function(response) {
			var responseData = '';
			response.setEncoding('utf8');

			response.on('data', function(chunk){
				responseData += chunk;
			});

			response.once('error', function(err){
				res.serverError(err);
			});

			response.on('end', function(){
				try {
					// response available as `responseData` in `yourview`
					res.locals.requestData = JSON.parse(responseData);
				} catch (e) {
					sails.log.warn('Could not parse response from options.hostname: ' + e);
				}
			});
		}).end();

	},
	
	getSlider1: function(req, res) {
		var apiCall = "http://partner.api.sensorlogic.com/v5.0/deviceState/get.json";
		var slider1FieldName = "32bc.measure.value";
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property params
		apiCall += '&deviceHandle=' + req.param('handle');

		// Execute API call
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
				try {
					var deviceFields = JSON.parse(responseData).body.deviceState.fields;
					
					// Find slider1 field
					for (var i = 0; i <= deviceFields.length; i++) {
						if (deviceFields[i].name == "32bc.measure.value") {
							res.send(deviceFields[i]);
							return;
						}
					}
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	getSlider2: function(req, res) {
		var apiCall = "http://partner.api.sensorlogic.com/v5.0/deviceState/get.json";
		var slider2FieldName = "ae26.measure.value";
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property params
		apiCall += '&deviceHandle=' + req.param('handle');

		// Execute API call
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
				try {
					var deviceFields = JSON.parse(responseData).body.deviceState.fields;
					
					// Find slider1 field
					for (var i = 0; i <= deviceFields.length; i++) {
						if (deviceFields[i].name == slider2FieldName) {
							res.send(deviceFields[i]);
							return;
						}
					}
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	getSlider3: function(req, res) {
		var apiCall = "http://partner.api.sensorlogic.com/v5.0/deviceState/get.json";
		var slider3FieldName = "af9e.measure.value";
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property params
		apiCall += '&deviceHandle=' + req.param('handle');

		// Execute API call
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
				try {
					var deviceFields = JSON.parse(responseData).body.deviceState.fields;
					
					// Find slider1 field
					for (var i = 0; i <= deviceFields.length; i++) {
						if (deviceFields[i].name == slider3FieldName) {
							res.send(deviceFields[i]);
							return;
						}
					}
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	setLedD6: function(req, res) {
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/deviceCommand/send.json'
		var featureId = "82fe"
		var command = "com.cinterion.module.actuator._1_0|configureFeature"
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property and value params
		apiCall += '&deviceHandle=' + req.param('handle');
		apiCall += '&virtualCommand=' + command;
		apiCall += '&featureId=' + featureId;
		apiCall += '&currentValue=' + req.param('value');
		
		// Execute API call
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
				try {
					res.send(JSON.parse(responseData));
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	setLedD5: function(req, res) {
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/deviceCommand/send.json'
		var featureId = "b807"
		var command = "com.cinterion.module.actuator._1_0|configureFeature"
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property and value params
		apiCall += '&deviceHandle=' + req.param('handle');
		apiCall += '&virtualCommand=' + command;
		apiCall += '&featureId=' + featureId;
		apiCall += '&currentValue=' + req.param('value');
		
		// Execute API call
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
				try {
					res.send(JSON.parse(responseData));
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	setDisplay: function(req, res) {
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/deviceCommand/send.json'
		var featureId = "a8f3"
		var command = "com.cinterion.module.actuator._1_0|configureFeature"
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property and value params
		apiCall += '&deviceHandle=' + req.param('handle');
		apiCall += '&virtualCommand=' + command;
		apiCall += '&featureId=' + featureId;
		apiCall += '&currentValue=' + req.param('value');
		
		// Execute API call
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
				try {
					res.send(JSON.parse(responseData));
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
	
	setBuzzer: function(req, res) {
		var apiCall = 'http://partner.api.sensorlogic.com/v5.0/deviceCommand/send.json'
		var featureId = "382b"
		var command = "com.cinterion.module.actuator._1_0|configureFeature"
		
		if(!req.session.hasOwnProperty('Session')) {
			return res.redirect('/session/new');
		}
		
		// Add auth params
		var authObj = req.session.Session;
		apiCall += '?authUser=' + authObj.authUser;
		apiCall += '&authOrg=' + authObj.authOrg;
		apiCall += '&authTime=' + authObj.authTime;
		apiCall += '&authSig=' + authObj.authSig;
		
		// Add deviceHandle and Property and value params
		apiCall += '&deviceHandle=' + req.param('handle');
		apiCall += '&virtualCommand=' + command;
		apiCall += '&featureId=' + featureId;
		apiCall += '&currentValue=' + req.param('value');
		
		// Execute API call
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
				try {
					res.send(JSON.parse(responseData));
				} catch (e) {
					sails.log.warn('Could not parse response: ' + e);
				}
			});
		}).end();
	},
};
