`use strict`;
const mongoose = require("mongoose");
const validate = require("mongoose-validator");
const _ = require("lodash");
const log = console.log;

const studentSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        match: [/^[A-Za-z]+/, 'Please fill a valid name']
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 8
    }
}, {
    collection: 'Student',
    timestamp: true
});

module.exports = mongoose.model('Student', studentSchema);