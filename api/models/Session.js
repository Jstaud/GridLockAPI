/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
		authUser: {
			type: 'string',
		},
		
		authOrg: {
			type: 'string',
		},
		
		authTime: {
			type: 'string'
		},
		
		authSig: {
			type: 'string'
		},
		
		toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  }
};

