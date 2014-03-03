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
  listUsersSelect: function(req, res){
    Sys_users.find().done(function(error, user){
      if(error){
      res.send(400);
      }else{
        var html = '';
        for(item in user){
          html += '<option value="' + user[item].id + '">' + user[item].user + '</option>';
        }
        return res.json({optionsUsers: html});        
      }
    });
  },

  listUsers: function(req, res){
  	Sys_users.find().done(function(error, user){
  		if(error){
			res.send(400);
  		}else{
  			var html = '';
  			for(item in user){
  				html += '<tr><td>' + user[item].user + '</td><td><buton class="btn btn-success" onclick="updateUser(' + user[item].id + ',\'' + user[item].user + '\',\'' + user[item].idtype + '\', \'' + user[item].idrol + '\', \'' + user[item].password + '\');">Modificar</button></td><td><buton class="btn btn-danger" onclick="destroyUser(' + user[item].id + ');">Eliminar</button></td></tr>';
  			}
        //return res.json({result: "List!"});
  			res.view({ title: "Administración de Usuarios!", jsonUsers: html });
  		}
  	});
  },

  create: function(req, res){
    var md5 = require('MD5');
  	Sys_users.create({ user: req.param('user'), idtype: req.param('idtype'), idrol: req.param('idrol'), password: md5(req.param('password')) }).done(function(error, success){
  		if(error)
        return res.json({error: error});
      else
        return res.json({result: "Insert!"});
  	});
  },

  update: function(req, res){
  	var md5 = require('MD5');
    Sys_users.findOne(req.param('idrol')).done(function(err, user){
      user.user = req.param('user');
      user.idtype = req.param('idtype');
      user.idrol = req.param('idrol');
      user.password = md5(req.param('password'));

  		user.save(function(err) {
  		    return res.json({result: "Update!"});
  	  });
  	});
  },

  destroy: function(req, res){
  	Sys_users.findOne(req.param('idUser')).done(function(err, user){
  		user.destroy(function(err) {
		    return res.json({result: "Destroy!"});
	  	});
  	});
  },

  listRoles: function(req, res){
    Sys_roles.find().done(function(error, roles){
      if(error){
      res.send(400);
      }else{
        var html = '';
        for(item in roles){
          html += '<option value="' + roles[item].id + '" >' + roles[item].role + '</option>';
        }
        return res.json({optionsRoles: html});
      }
    });
  },

  listTypeUsers: function(req, res){
    Sys_types.find().done(function(error, types){
      if(error){
      res.send(400);
      }else{
        var html = '';
        for(item in types){
          html += '<option value="' + types[item].id + '">' + types[item].type + '</option>';
        }
        return res.json({optionTypes: html });
      }
    });
  },
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to Sys_rolesController)
   */
  _config: {}
  
};
