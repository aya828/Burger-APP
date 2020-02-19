//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  app.get('/', function (req, res) {
    console.log('home page');
    let burgers = [];

    db.Burger.findAll({}).then((data)=>{

      data.map(item => burgers.push(item.dataValues));
      //let formattedData = data;
      //console.log(formattedData);
      res.render('index', { Burgers: burgers})
    })
  });
  //GET ALL RECIPES VIEW
  // app.get('/api/burger', function (req, res) {
  //   db.Burger.findAll({}).then((data)=>{
  //     console.log(data);
  //     //res.render(recipes)
  //   })
  // });
 
  // // GET SPECIFIC RECIPE
  // app.get('/api/burger', function (req, res) {
  //   res.render("burger");
  // });
  
  // app.get('/', function (req, res) {
  //   console.log('home page');
  //   let burgers = [];

  //   db.Burger.findAll({}).then((data) => {
  //     data.map(item => burgers.push(item.dataValues));

  //     res.render('index', { Burgers: burgers })
  //   })
  // });

  app.get("/api/burger", (req,res) => {
    console.log(res.Burger);
  })

  app.post("/api/burger", (req, res) => {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then((newBurger) => {
      res.json({result: "success"});
    });
  });
}