const express = require('express');
const controller = express.Router();
const bcrypt = require('bcrypt');

const studentData = require('../studentData.json')

const db = require('../db/index');

controller.get('/', async (req, res) => {
    let { min, max, limit = 25 } = req.query;
    limit = Number(limit);
    // min = Number(min)
    // max = Number(max)
    // console.log(`limit: ${limit} min: ${min} max: ${max}`)
    //SELECT * FROM students WHERE id >= $1 AND id <= $2 LIMIT $3 [min, max, limit]

    // let dataForDelievery = { ...studentData }
    // if (min >= 0 && max > min) {
    //     let adjustedMax = min + (limit-1) > max ? max : min + (limit-1);
    //     dataForDelievery.students = dataForDelievery.students.slice(min-1, adjustedMax)
    // }else{
    //     dataForDelievery.students = dataForDelievery.students.slice(0, limit)

    // }
    let dataForDelievery = await db.any('SELECT * FROM students')
    dataForDelievery = dataForDelievery.slice(0, limit)

    res.json(dataForDelievery)
})

controller.get('/:id/gradeAverage', (req, res) => {
    try {
        const studentID = req.params.id;
        if (!/[0-9]/.test(studentID)) {
            res.send('Student ID must be a number')
            return;
        }
        const singleStudent = studentData.students.find(s => s.id === studentID)
        if (singleStudent) {
            let avg = (singleStudent.grades.reduce((acc, cur) => acc + Number(cur), 0)) / singleStudent.grades.length;
            res.json({grades: singleStudent.grades, average: avg})
        } else {
            res.send('student not found')
        }

    } catch (err) {
        console.log("error: " + err)
        res.status(500).send("aN error occured")
    }
})

controller.get('/:id', async (req, res) => {
    try {
        const studentID = req.params.id;

        if (!/[0-9]/.test(studentID)) {
            res.send('Student ID must be a number')
            return;
        }
        const singleStudent = await db.oneOrNone('SELECT * FROM students WHERE id = $1', [studentID])
        //const singleStudent = studentData.students.find(s => s.id === studentID)
        if (singleStudent) {
            res.json(singleStudent)
        } else {
            res.send('student not found')
        }
    } catch (err) {
        res.status(500).send("aN error occured")
    }
})

controller.get('/:id/grades', async (req, res) => {
    const studentID = req.params.id;

    try {
        const grades = await db.any('SELECT * FROM grades WHERE student_id = $1', [studentID])
        grades.sort((a, b) => a.date - b.date) //sort from oldest date to newest date
        res.json(grades)
    } catch (err) {
        res.status(500).send(err)
    }
})

controller.delete('/:id', async (req, res) => {
    try {
        const studentID = req.params.id;

        await db.none('DELETE FROM grades WHERE student_id = $1', [studentID])

        const deletedStudent = await db.one(`DELETE FROM students WHERE id = $1 RETURNING *`, [studentID])
        res.json(deletedStudent);

    } catch (err) {
        res.status(500).send(err)
    }
})

controller.put('/:id', async (req, res) => {
    try {
        const studentID = req.params.id;
        const {firstname, lastname, company, city, skill, pic} = req.body;
        console.log(req.body)

        const updatedUser = await db.one('UPDATE students SET firstname=$1, lastname=$2, company=$3, city=$4, skill=$5, pic=$6 WHERE id = $7 RETURNING *',
            [firstname, lastname, company, city, skill, pic, studentID])

        res.json(updatedUser)

    } catch (err) {
        res.status(500).send(err)
    }

})

controller.post('/', async (req, res) => {
    try {
        //const { username, firstname, lastname, password = '1234', email } = req.body;
        // if (username.length < 4)
        //     throw ({ message: "username must be 4 or more characters" })
        // const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword)

        const {firstname, lastname, company, city, email, skill, pic } = req.body;
        if (!firstname || !lastname)
             throw ({ message: "You cannot leave name empty" })

        let defaultPic = 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg'

        let user = await db.oneOrNone('INSERT INTO students (firstname, lastname, company, city, skill, email, pic) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING firstname, email',
            [firstname, lastname, company, city, skill, email.toLowerCase(), defaultPic]);

        res.json(user)

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

//npm install -D nodemon (install nodemon but not in heroku, only locally)

module.exports = controller;