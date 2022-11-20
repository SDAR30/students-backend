DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS grades CASCADE;

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

CREATE TABLE grades (
    id SERIAL PRIMARY KEY, 
    grade INT DEFAULT 0,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    student_id INTEGER REFERENCES students (id) ON DELETE CASCADE
);