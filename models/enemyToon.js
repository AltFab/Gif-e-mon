module.exports = function(sequelize, DataTypes){
var enemyToon = sequelize.define("enemyToon", {
    enemy_gif_name: {
        type: DataTypes.STRING,
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

return enemyToon;
};