// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var userToon = sequelize.define("userToon", {
    user_name: {
        type: DataTypes.String,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gif_link: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    health: {
        type: DataTypes.INTEGER,
        defaultValue: "10",
    },
    attack: {
        type: DataTypes.INTEGER,
        defaultValue: "0",
    },
    potion: {
        type: DataTypes.INTEGER,
        defaultValue: "3",
    },
});
userToon.sync();

module.exports = userToon;
