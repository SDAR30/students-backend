const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json')

controller.get('/', (req, res) => {
    res.json(studentData)
})

controller.get('/:id', (req, res) => {
    try {
        const studentID = req.params.id;

        if (!/[0-9]/.test(studentID)) {
            res.send('Student ID must be a number')
            return;
        }
        const singleStudent = studentData.students.find(s => s.id === studentID)
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