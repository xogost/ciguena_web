// Location: /config/passport.js
var passport    = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  md5 = require('MD5');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Sys_users.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    Sys_users.findOne({user: username}).done(function(err, user) {
      if (err) { return done(null, err); }
      if (!user || user.length < 1) { return done(null, false, { message: 'Incorrect User or Password'}); }
      if(md5(password) == user.password) {
        return done(null, user);
      }else{
        return done(null, false, { message: 'Invalid User or Password'});
      }
    });
  })
);

module.exports = {
 express: {
    customMiddleware: function(app){
      console.log('express midleware for passport');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};