DROP DATABASE IF EXISTS giphemonDB;
CREATE DATABASE giphemonDB;

USE giphemonDB;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    Link VARCHAR(120) NULL,
    Giphemon VARCHAR(45) NULL,
    ATTACK INT NULL,
    HP INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (Link, Giphemon, ATTACK, HP)
VALUES ("https://media3.giphy.com/media/gzWVVjvMy46zK/200_s.gif?cid=e1bb72ff5bb6251a774845752ee6d5e2", "Bart", 5, 10);

INSERT INTO users (Link, Giphemon, ATTACK, HP)
VALUES ("https://media3.giphy.com/media/mGd556BOp4Kk0/200_s.gif?cid=e1bb72ff5bb629c94f79684c590de122", "Rooster", 10, 5);