const inquirer = require("inquirer");
// const cTable = require('console.table');
const mysql = require('mysql2');
// const DatabaseCall = require('./db/index.js')
const fs = require('fs')

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./db/connection");
// const { connect } = require('./db/connection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


  const promptUser = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose action:",
            choices: ["View all departments", "View all roles", "View all Employees", "Add a role", "Add an Employee", "Update an employee role", "Done"],
        },
    ]).then(function (data) {

        switch (data.role) {
            case "View all departments":
                viewAllDepartments();
                break;
            case "View all roles":
                viewAllRoles();
                break;
            case "View all Employees":
                viewAllEmployees();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an employee role":
                createDepartment();
                break;
            case "Done":
                done();
                break;
        }
    });
}


function viewAllDepartments() {
    const sql = 'SELECT * FROM department';
  db.query(sql, (err, res) => {
    if (err) throw err
    console.table(res)
        }
    )
    
}

function viewAllRoles () {
    
}

function viewAllEmployees () {
    
}

function addRole () {
    
}

function addEmployee () {
    
}

function createDepartment () {
    
}

function done () {
    
}

//INIT
promptUser()