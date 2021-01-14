var mysql = require("mysql2");
var http = require("http");

console.log("Hello World!");


// how to connect to a database and show on console / web page
var local_dbhost = {
    host: "localhost", // 127.0.0.1
    port: "3306",
    user: "root",
    password: "1234",
    database: "cb12ptjs"
};

var remote_dbhost = {
    host: "ra1.anystream.eu", // 127.0.0.1
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};

var sql = "SELECT * FROM `cb12ptjs`.`users`;";
var sql2 = "SELECT * FROM `cb12ptjs`.`customersssss`;";

// make a connection to the database server
// var connection = mysql.createConnection(local_dbhost);
var connection = mysql.createConnection(local_dbhost);

// check if connection is ok
// console.log(connection);

connection.connect(function(err) {
    // Houston we do have a problem!!!
    if(err) {
        console.log("Error connecting");
        console.log(err);
    } 
    // Houston we don't have a problem!!!
    // data are coming
    else {
        console.log("Connected!!!");
        connection.query(sql, function(ee, result, fields) {
            // data are finally HERE!!!!!
            // console.log("result: ", result);
            
            // all records with selective fields (excluded id)
            // Object.keys(result).forEach(function(key) {
            //     var row = result[key];
            //     console.log(row.firstname);
            //     console.log(row.lastname);
            //     console.log(row.telephone);
            // });

            var data0 = Object.assign({}, result[0]);
            var server = http.createServer(function(request, response) {
                response.writeHead(404, {});
                response.write("You didn't make it!!!!\n");
                //response.write(Object.values(data0).toString());
                 response.write(`
                id :       ${(data0.id)}
                firstName: ${(data0.firstname)}
                lastname:  ${(data0.lastname)}
                telephone: ${(data0.telephone)}`
                )
                response.end("");
            }).listen(8000);
             console.log(data0);
            /* 
                http://localhost:8000
                Id: .....
                First Name: .....
                Last Name: .....
                Telephone: .....
            */

        });
        //console.log("1. after query");
        connection.end();
    }
   // console.log("2. outside if inside connect");
});
