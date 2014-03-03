/**
 * Sys_roles
 *
 * @module      :: Model
 * @description :: Corresponde al modelo de la tabla users de la base de datos ciguena.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    id: 'int',
    idrol: 'int',
    idtype: 'int',
    user: 'string',
    password: 'string',
  }

};
