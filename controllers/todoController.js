var data = [{item: "Finish node"},{item:'Get prepared for angular'}];
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app) {


    app.get("/", function (req, res) {
      res.render('todo', {todoList:data} );
    });

    app.post("/todo",urlEncodedParser, function (req, res) {

        data.push(req.body); 
        console.log(JSON.stringify(data));
        res.json(data);

    });


    app.delete("/todo/:name", function (req, res) {

        var item = req.params.name;
        //console.log(item);
        data = data.filter(function(ele){
            //console.log( "Value " +ele.item.replace(/ /g, "-")); 
            return ele.item.replace(/ /g, "-") !== item;
        });
        //console.log("data" + data);
        res.json(data);

    });

};