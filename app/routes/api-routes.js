//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  app.get('/', function (req, res) {

    db.Burger.findAll({}).then((burger)=>{
      let uneaten = [];
      let eaten = [];
      burger.forEach(burger => {
        if(!burger.devoured) {
          uneaten.push({ id: burger.id, name: burger.burger_name });
        } else {
          eaten.push({ id: burger.id, name: burger.burger_name });
        }
      })
      res.render('index', {burgers: { eaten: eaten, uneaten: uneaten }})
    })
  });

  app.put("/api/burger/:id", (req,res) => {
    db.Burger.update(
      {devoured: 1},
      {where: {
        id: req.params.id
      }}
    ).then(function(data) {
      console.log(data);
      res.json({result: "success"});
    })
  })

  app.post("/api/burger", (req, res) => {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.name,
      devoured: 0
    }).then((newBurger) => {
      res.json({result: "success"});
    });
  });
  }
