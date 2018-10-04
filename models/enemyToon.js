var orm = require("../config/orm.js")

var enemyToon = {
    all:function(cb){
        orm.all("gifbattles", function(res){
            cb(res);
        });
    },
    create: function(cols, vals,cb){
        orm.create("gifbattles", cols, vals, function(res){
            cb(res);
        });
    },
    update:function(objColVals, condition, cb){
        orm.update("gifbattles", objColVals, condition function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("gifbattles", condition, function(res) {
          cb(res);
        });
      }
};

module.exports = enemyToon;