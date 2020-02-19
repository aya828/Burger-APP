module.exports = function (app) {

  //Landing Page View
  app.get('/', function (req, res) {
    res.render("index");
  });

}