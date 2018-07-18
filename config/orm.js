
var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(BoilEm, MashEm, StickEmInAStew, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [BoilEm, MashEm, StickEmInAStew], function(err, samwise){
            if (err) throw err;
        callback(samwise);
    });
    },
    updateOne: function(colVal, id, callback) {
        console.log("ormJS colVal: ", colVal, "id: ", id );
    var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
    connection.query(queryString, [id], function(err, result) {
      
      if (err) throw err;
      
      callback(result);
    });
  }
  // deleteOne would go here - out of time
 // DELETE - DELETE FROM `burgers_db`.`burgers` WHERE `id`='17';
}

module.exports = orm;