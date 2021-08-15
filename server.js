const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');
const DatabaseCall = require('./db/index.js')

const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();