var orm = require("../config/orm.js")

var userToon = {
    all:function(cb){
        orm.all("gifedex", function(res){
            cb(res);
        });
    },
    create: function(cols, vals,cb){
        orm.create("gifedex", cols, vals, function(res){
            cb(res);
        });
    },
    update:function(objColVals, condition, cb){
        orm.update("gifedex", objColVals, condition function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("gifedex", condition, function(res) {
          cb(res);
        });
      }
};

module.exports = userToon;
