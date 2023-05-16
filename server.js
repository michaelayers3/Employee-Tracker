const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password: 'password',
        database: 'employee_db'

    },
    console.log('Connected to the employee database.')
);

    console.log(`
======================================================
╔═══╗        ╔╗                  
║╔══╝        ║║                  
║╚══╗╔╗╔╗╔══╗║║ ╔══╗╔╗ ╔╗╔══╗╔══╗
║╔══╝║╚╝║║╔╗║║║ ║╔╗║║║ ║║║╔╗║║╔╗║
║╚══╗║║║║║╚╝║║╚╗║╚╝║║╚═╝║║║═╣║║═╣
╚═══╝╚╩╩╝║╔═╝╚═╝╚══╝╚═╗╔╝╚══╝╚══╝
         ║║         ╔═╝║         
         ╚╝         ╚══╝                                                          

╔═╗╔═╗                         
║║╚╝║║                         
║╔╗╔╗║╔══╗ ╔═╗ ╔══╗ ╔══╗╔══╗╔═╗
║║║║║║╚ ╗║ ║╔╗╗╚ ╗║ ║╔╗║║╔╗║║╔╝
║║║║║║║╚╝╚╗║║║║║╚╝╚╗║╚╝║║║═╣║║ 
╚╝╚╝╚╝╚═══╝╚╝╚╝╚═══╝╚═╗║╚══╝╚╝ 
                    ╔═╝║       
                    ╚══╝       

======================================================
   `);
  
inquirer
.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            // 'Update an Employee Manager',
            // 'View Employees by Manager',
            // 'View Employees by Department',
            // 'Delete a Department',
            // 'Delete a Role',
            // 'Delete an Employee',
            // 'View the Total Utilized Budget of a Department',
            'Exit'
        ]
    }
])

 
.then((answers) => {
    if (answers.choice === 'View All Departments') {
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        }
        )}


        
    else if (answers.choice === 'View All Roles') {
        db.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        , function (err, results) {
           
            console.table(results);
        }
        )}
    else if (answers.choice === 'View All Employees') {
        db.query(`
        SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;`
        , function (err, results) {
            console.table(results);
        }
        )}
    else if (answers.choice === 'Add a Department') {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of the department you would like to add?'
            }
        ])
        .then((response) => {
            let department = response.department;
        db.query('INSERT INTO department (name) VALUES (?);', department , function (err, results) {
            console.log(`Added ${department} to table department.`);
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        });
        }
        )})}
    else if (answers.choice === 'Add a Role') {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role you would like to add?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'What is the department id of the role you would like to add?',
                choices: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ]
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role you would like to add?'
            },
           
        ])
        .then((response) => {
            let newRole = [response.title, response.department_id, response.salary];
            db.query('INSERT INTO role (title, department_id, salary) VALUES (?,?,?);', newRole , function (err, results) {
            console.log(`Added ${newRole} to table role.`);
            
            db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id', function (err, results) {
                console.table(results);
            });
        }
        
        )})}
    else if (answers.choice === 'Add an Employee') {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee you would like to add?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee you would like to add?'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the role id of the employee you would like to add?',
                
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'What is the manager id of the employee you would like to add? (Select NULL if none)',
                choices: [
                    '1',
                    '3',
                    '5',
                    '7',
                    '9',
                    'null'
                ],
                filter: (input) => input === 'null' ? null : input,
            },
        ])
        .then((response) => {
            let newEmployee = [response.first_name, response.last_name, response.role_id, response.manager_id];
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);', newEmployee , function (err, results) {
            db.query(`
        SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;`
        , function (err, results) {
            console.table(results);
        }
        )}
        )})}
    else if (answers.choice === 'Update an Employee Role') {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee_id',
                message: 'What is the ID of the employee you would like to update?',
                choices: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                    // 'John Smith',
                    // 'Jane Doe',
                    // 'Bob Smith',
                    // 'Sally Jones',
                    // 'Joe Smith',
                    // 'Billy Boi',
                    // 'Jonathan Bejarano',
                    // 'Mary Jane',
                    // 'Jill Smith',
                    // 'Jack Smith'
                ]
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is the new role id of the employee you would like to update?',
                choices: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10'
                ]
            },
        ])

        .then((response) => {
            const employee_id = response.employee_id;
            const role_id = response.role_id;
            const sql = `UPDATE employee SET role_id = ${role_id} WHERE employee.id = ${employee_id}`;
        db.query(sql, function (err, results) {
            console.log(`Updated employee ${employee_id} to role ${role_id}.`);
            db.query(`
        SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;`
        , function (err, results) {
            console.table(results);
        }
        )


        }
        )
    })}
    
    
});
   



