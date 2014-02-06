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
   *    `/store/create`
   */
   create: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


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
   *    `/store/destroy`
   */
   destroy: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/store/like`
   */
   like: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
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
        hello: 'world'
      });
    },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StoreController)
   */
  _config: {}

  
};
