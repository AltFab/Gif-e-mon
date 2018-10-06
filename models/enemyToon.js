var enemyToon = sequelize.define("enemyToon", {
    enemy_gif_name: Sequelize.STRING,
    enemy_gif_link: Sequelize.STRING,
    enemy_health: Sequelize.INTEGER,
    enemy_attack: Sequelize.INTEGER,
    enemy_potion: Sequelize.INTEGER
});


module.exports = enemyToon;