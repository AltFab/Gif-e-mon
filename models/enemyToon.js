var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var enemyToon = sequelize.define("enemyToon", {
    enemy_gif_name: {
        type: DataTypes.String,
        allowNull: false,
    },
    enemy_gif_link: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    enemy_health: {
        type: DataTypes.INTEGER,
        defaultValue: "10",
    },
    enemy_attack:  {
        type: DataTypes.INTEGER,
        defaultValue: "0",
    },
    enemy_potion:  {
        type: DataTypes.INTEGER,
        defaultValue: "1",
    }
});

enemyToon.sync();

module.exports = enemyToon;
