/**
 * StoreController
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
   /**
   * Action blueprints:
   *    `/store/index`
   *    `/store`
   */
  index: function (req, res) {
    res.view({ title: "Domicilios Tendero!" });
  },



  /**
   * Action blueprints:
   *    `/store/order`
   */
   order: function (req, res) {
      var socket = req.socket;
      var io = sails.io;

      var orderList = req.param('orderList');
      var dataPeople = req.param('dataPeople');
      
      io.sockets.emit("OrderResponse", { orderListP: orderList, dataPeopleP: dataPeople });

      io.sockets.emit('confirmationOrder', {state: "La solicitud de servicio ha sido recibida, y será confirmada en un lapso de 5 a 10 minutos, Gracias."});

      return res.json({
        response: 'ok!'
      });
    },

  listStores: function(req, res){
    Adm_store.find().done(function(error, store){
      if(error){
      res.send(400);
      }else{
        var html = '';
        for(item in store){
          html += '<tr><td>' + store[item].name + '</td><td><buton class="btn btn-success" onclick="updateStore(' + store[item].id + ',\'' + store[item].iduser + '\',\'' + store[item].name + '\', \'' + store[item].address + '\', \'' + store[item].phone + '\', \'' + store[item].mobile_phone + '\', \'' + store[item].latitude + '\', \'' + store[item].longitude + '\');">Modificar</button></td><td><buton class="btn btn-danger" onclick="destroyStore(' + store[item].id + ');">Eliminar</button></td></tr>';
        }
        //return res.json({result: "List!"});
        res.view({ title: "Administración de Tiendas!", jsonStores: html });
      }
    });
  },

  mapStores: function(req, res){
    res.header('Access-Control-Allow-Origin', "*")
    Adm_store.find().done(function(error, store){
      if(error){
        res.send(400);
      }else{
        return res.json({ storeJson: store });
      }
    });
  },

  create: function(req, res){
    var data = req.param('store');
    Adm_store.create(data).done(function(error, success){
      if(error)
        return res.json({error: error});
      else
        return res.json({result: "Insert!"});
    });
  },

  update: function(req, res){
    var data = req.param('store');
    Adm_store.findOne(req.param('idStore')).done(function(err, store){
      
      store.iduser = data.iduser;
      store.name = data.name;
      store.address = data.address;
      store.phone = data.phone;
      store.mobile_phone = data.mobile_phone;
      store.latitude = data.latitude;
      store.longitude = data.longitude;
  
      store.save(function(err) {
          return res.json({result: "Update!"});
      });
    });
  },

  destroy: function(req, res){
    Adm_store.findOne(req.param('idStore')).done(function(err, user){
      user.destroy(function(err) {
        return res.json({result: "Destroy!"});
      });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StoreController)
   */

   getStore: function(req, res){
    res.header('Access-Control-Allow-Origin', "*");
    var data = req.param('idStore');
    Adm_store.findOne(req.param('idStore')).done(function(err, store){
          return res.json({data: store});
    });
  },

  _config: {}

  
};
