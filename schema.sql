DROP DATABASE IF EXISTS moviesWatchlist;

CREATE DATABASE moviesList;

USE moviesList;

CREATE TABLE movies (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    movie VARCHAR(255) NOT NULL,
    movieWatched BOOLEAN,
    PRIMARY KEY (id)
);