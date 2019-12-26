`use strict`;

//public node-modules
const chalk = require("chalk");

//modelschema's
const {studentModel} = require("../model");

//variable declaration
const log = console.log;

//Responsible to add student in student collection
const addStudent = (req, res) => {
    const studentData = new studentModel({
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password
    });

    studentData.save((error, studentObject) => {
       if (error) {
            log(
                chalk.red(`An error occured while insert stuident`),
                error
            );
            return res.status(400).send(error);
       }
       return res.status(201).send(studentObject);
    });
};

//Responsible to return all student from student collection
const getAllstudent = (req, res) => {
    studentModel.find((error, allStudent) => {
       if (error) {
           log(
               chalk.red(`An error occured while fetch all students`),
               error
           );
           return res.status(400).send(error);
       }
       else if(!allStudent) {
           log(
               chalk.red(`An error occured while fetch all students`)
           );
           return res.status(204).send({message: `An error occured while fetch all students`});
       }
       return res.status(200).send(allStudent);
    });
};

module.exports = {
    addStudent,
    getAllstudent
};