DROP DATABASE IF EXISTS gifemon_db;
CREATE DATABASE gifemon_db;

USE gifemon_db;

CREATE TABLE gifedex(
	id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(50) NOT NULL,
	score INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE gifcenter(
	id INT AUTO_INCREMENT NOT NULL,
	url VARCHAR(100) NOT NULL,
    hp INT NOT NULL,
    attack INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE gifbattles(
	id INT AUTO_INCREMENT NOT NULL,
    enemy_gif VARCHAR(100) NOT NULL,
    enemy_attack INT NOT NULL,
    enemy_hp INT NOT NULL,
	PRIMARY KEY(id)
);