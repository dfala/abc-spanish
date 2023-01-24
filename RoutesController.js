var Pages = require('./PagesController.js');

module.exports = function (app) {
  app.get('/', Pages.home);
};
