module.exports = function(sequelize, DataTypes){
var userToon = sequelize.define("userToon", {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    score:{
        type: DataTypes.INTEGER,
        defaultValue: "0",
        allowNull: true
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
    buildPicked: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelDone: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});
return userToon;
}


