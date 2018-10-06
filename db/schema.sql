DROP DATABASE IF EXISTS gifemon_db;
CREATE DATABASE gifemon_db;

USE gifemon_db;
-- user info
CREATE TABLE gifedex(
	id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(50) NOT NULL,
	score INT,
    gif_link VARCHAR (max) NOT NULL,
    health INT NOT NULL,
    attack INT NOT NULL,
    potion INT(3) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE gifemy(
	id INT AUTO_INCREMENT NOT NULL,
    enemy_gif_name VARCHAR(200) NOT NULL,
    enemy_gif_link VARCHAR(max) NOT NULL,
    enemy_attack INT NOT NULL,
    enemy_hp INT NOT NULL,
    enemy_potion INT(1) NOT NULL,
	PRIMARY KEY(id)
);