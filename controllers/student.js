`use strict`;
//public node-module
const express = require("express");
const router = express.Router();

//attach services with controller
const {addStudent} = require("../services/student");

//attach all routes
router.post('/add_student', addStudent);
router.get('/all_student', getAllstudent);

module.exports = router;