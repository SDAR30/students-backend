DROP DATABASE IF EXISTS students_db;

CREATE DATABASE students_db;

\c students_db;

CREATE TABLE students (
    id SERIAL PRIMARY KEY, 
    firstname text NOT NULL,
    lastname text NOT NULL,
    company text NOT NULL,
    skill text NOT NULL,
    pic text NOT NULL,
    city text NOT NULL,
    email text NOT NULL
);