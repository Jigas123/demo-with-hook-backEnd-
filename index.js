`use strict`;
//public node-modules
const cors = require("cors");
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const chalk = require('chalk');

//variable declaration
const app = express();
const port = 8001 ||process.env.PORT;
const log = console.log;

//database connectivity and it's utils
mongoose.Promise = global.Promise;
mongoose.connect(config.get(`mongo.host`), config.get(`mongo.options`), (error, response) => {
    if (error) {
        log(chalk.red(`An error occurred while making a connection with database`), error);
        return process.exit(1);
    }
    log(chalk.green(`Database successfully connected`));
});

//attached route with application
const {studentRoutes} = require("./controllers");
app.use('/student/', studentRoutes);

//default home route for status
app.get(`/`, (req, res) => {
    res.send("run app successfully");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
