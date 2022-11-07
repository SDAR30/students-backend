const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json')

const db = require('../db/index');

controller.get('/', async (req, res) => {
    let { min, max, limit = 25 } = req.query;
    limit = Number(limit);
    // min = Number(min)
    // max = Number(max)
    // console.log(`limit: ${limit} min: ${min} max: ${max}`)
    // //SELECT * FROM students WHERE id >= $1 AND id <= $2 LIMIT $3 [min, max, limit]

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
            res.json("grades: " + singleStudent.grades + " average: " + avg)
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

//npm install -D nodemon (install nodemon but not in heroku, only locally)

module.exports = controller;