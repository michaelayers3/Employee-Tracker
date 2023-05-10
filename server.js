const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlendcoded({ extended: false }));
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


// _______             _                           ______                                      
// (_______)           | |                         |  ___ \                                     
//  _____   ____  ____ | | ___  _   _  ____ ____   | | _ | | ____ ____   ____  ____  ____  ____ 
// |  ___) |    \|  _ \| |/ _ \| | | |/ _  ) _  )  | || || |/ _  |  _ \ / _  |/ _  |/ _  )/ ___)
// | |_____| | | | | | | | |_| | |_| ( (/ ( (/ /   | || || ( ( | | | | ( ( | ( ( | ( (/ /| |    
// |_______)_|_|_| ||_/|_|\___/ \__  |\____)____)  |_||_||_|\_||_|_| |_|\_||_|\_|| |\____)_|    
//               |_|           (____/                                        (_____|            
