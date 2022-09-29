const express = require('express');
const { repeatNTimesWithSpace, capitilizeFirstLetter } = require('../utils/stringUtils');
const controller = express.Router();

controller.get('/:name/:times', (req, res) => {
    try {
        const { name, times } = req.params;

        const repeatedNames = repeatNTimesWithSpace(capitilizeFirstLetter(name), times);
        res.send(repeatedNames)


    } catch (err) {
        res.send("There was a nn error")
    }
})


module.exports = controller;