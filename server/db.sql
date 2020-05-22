/*
# enter postgres
$ psql -U postgres

# create database
$ CREATE DATABASE <name>;

# see all databases
$ \l

# select database
$ \c <name>

# see table
$ \dt

# create table
$ CREATE TABLE todo(
	todo_id SERIAL PRIMARY KEY,
	description VARCHAR(255)
);

# show all todos
$ SELECT * FROM todo;

# get specific todo_id from todos
$ SELECT * FROM todo WHERE todo_id = <id>
*/