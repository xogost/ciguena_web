/**
 * CiguenaController
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
   *    `/ciguena/index`
   *    `/ciguena`
   */
   index: function (req, res) {
    var isAuthenticated = false;
    if(req.isAuthenticated()){
      isAuthenticated = true;
    }
    res.view({ 
      title: "Cigueña Pagina Principal!", 
      Authenticated: isAuthenticated 
    });
  },


  /**
   * Action blueprints:
   *    `/ciguena/support`
   */
   support: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/ciguena/about`
   */
   about: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CiguenaController)
   */
  _config: {}

  
};
