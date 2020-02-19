//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  //GET ALL RECIPES VIEW
  app.get('/api/burger', function (req, res) {
    db.Burger.findAll({}).then((data)=>{
      console.log(data);
      //res.render(recipes)
    })
  });
 
  // GET SPECIFIC RECIPE
  app.get('/api/burger', function (req, res) {
    res.render("burger");
  });
  
  app.get('/', function (req, res) {
    db.Burger.findAll({}).then((data)=>{
      let formattedData = data;
      res.render('/index', {Burgers: formattedData})
    })
  });

  app.post("/api/burger", (req, res) => {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.newBurger,
      devoured: false
    }).then((newBurger) => {
      console.log(newBurger);
      // res.json(dbTodo);
    });
  });
}