const inquirer = require("inquirer");

const mysql = require('mysql2');
// const DatabaseCall = require('./db/index.js')
const fs = require('fs')

const express = require('express');
const router = require('express').Router();

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./ApiRoutes/departmentRoute');

const db = require("./db/connection");

//  const { connect } = require('./db/connection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use('/api', apiRouts)

  const promptUser = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose action:",
            choices: ["View all departments", "View all roles", "View all Employees", "Add a role", "Add an Employee", "Add a department", "Done"],
        },
    ]).then(data => {

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
            case "Add a department":
                addDepartment();
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
    promptUser()
        }
    )
    
};

function viewAllRoles () {
    const sql = 'SELECT * FROM role';
  db.query(sql, (err, res) => {
    if (err) throw err
    console.table(res)
    promptUser()
  }
  )
};

function viewAllEmployees () {
    const sql = 'SELECT * FROM employee';
  db.query(sql, (err, res) => {
    if (err) throw err
    console.table(res)
    promptUser()
  }
  )
}

function addRole () {
    
}

function addEmployee () {
    
}

function addDepartment () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Enter a department:'
        }
    ]).then(data => {
        db.query('INSERT INTO department SET?', {name: data.department}, (err, res) => {
            if (err) throw err;
            console.log('success')
            promptUser()
        })
    })
}

function done () {
db.close();
}

//INIT
promptUser()