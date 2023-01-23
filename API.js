const WordsController = require('./WordsController.js');

module.exports = function (app) {
  app.put('/api/get-words', WordsController.getWords);
}
