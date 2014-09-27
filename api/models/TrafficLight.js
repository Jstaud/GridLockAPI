/**
* Sensor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    handle: {
      type: 'string',
      required: true,
			unique: true
    },
    lastUpdated: {
      type: 'string'
		},
		street1: {
			type: 'string',
			required: true
		},
		street2: {
			type: 'string',
			required: true
		},
		timeToChange: {
			type: 'int'
		},
		colorToChange: {
			type: 'string'
		}
  }
};
