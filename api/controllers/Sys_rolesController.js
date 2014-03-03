/**
 * Sys_rolesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  listRoles: function(req, res){
  	Sys_roles.find().done(function(error, roles){
  		if(error){
			res.send(400);
  		}else{
  			var html = '';
  			for(item in roles){
  				html += '<tr><td>' + roles[item].role + '</td><td><buton class="btn btn-success" onclick="updateRol(' + roles[item].id + ',\'' + roles[item].role + '\');">Modificar</button></td><td><buton class="btn btn-danger" onclick="destroyRol(' + roles[item].id + ');">Eliminar</button></td></tr>';
  			}

  			res.view({ title: "Creación de Roles!", jsonRoles: html });
  		}
  	});
  },

  create: function(req, res){
  	Sys_roles.create({ role: req.param('roleName') }).done(function(error, success){
  		return res.json({result: "Insert!"});
  	});
  },

  update: function(req, res){
  	Sys_roles.findOne(req.param('idrol')).done(function(err, role){
		role.role = req.param('roleName');
		
		role.save(function(err) {
		    return res.json({result: "Update!"});
	  	});

  	});
  },

  destroy: function(req, res){
  	Sys_roles.findOne(req.param('idrol')).done(function(err, role){
		role.destroy(function(err) {
		    return res.json({result: "Destroy!"});
	  	});

  	});
  },
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to Sys_rolesController)
   */
  _config: {}
  
};
