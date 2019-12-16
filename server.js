const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Tboswag674!",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
});

function init() {

    console.log("---------------------------------------------");
    console.log("----------------- Welcome! ------------------");
    console.log("---------------------------------------------");

    inquirer.prompt({
        name: "initChoice",
        type: "list",
        message: 'Choose a function',
        choices: [
            { value: 'View a Table' },
            { value: 'Insert Data into a Table' },
            { value: 'Update an Employee' },
            { value: 'Exit this Application' }
        ]
    }).then(({ initChoice }) => {
        if (initChoice === "View a Table") {
            view();
        }
        if (initChoice === 'Insert Data into a Table') {
            insert();
        }
        if (initChoice === 'Update an Employee') {
            updateEmp();
        }
        else {
            console.log('exit with ctrl+C')
        }

    })

};

function view() {

    console.log("---------------------------------------------");
    console.log("-------------- Choose a Table ---------------");
    console.log("---------------------------------------------");

    inquirer.prompt({
        name: "view",
        type: "list",
        choices: [
            { value: 'View Employees' },
            { value: 'View Departments' },
            { value: 'View Roles' },
            { value: 'Return to Main Menu' },
        ],
    }).then(({ view }) => {
        if (view === 'View Departments') {
            queryAllDepartments();
        }
        if (view === 'View Roles') {
            queryAllRoles();
        }
        if (view === 'View Employees') {
            queryAllEmployees();
        }
        if (view === 'Return to Main Menu') {
            init();
        }
    })
};

function insert(){
    console.log("---------------------------------------------");
    console.log("-------------- Choose a Table ---------------");
    console.log("---------------------------------------------");

    inquirer.prompt({
        name: "update",
        type: "list",
        choices: [
            { value: 'Insert Data into Employees' },
            { value: 'Insert Data into Departments' },
            { value: 'Insert Data into Roles' },
            { value: 'Return to Main Menu' },
        ],
    }).then(({ update }) => {
        if (update === 'Insert Data into Departments') {
            queryInsDept();
        }
        if (update === 'Insert Data into Roles') {
            queryInsRole();
        }
        if (update === 'Insert Data into Employees') {
            queryInsEmp();
        }
        if (update === 'Return to Main Menu') {
            init();
        }
    })
}
function queryAllEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.log("-------------------- Employees -------------------------")
        for (var i = 0; i < res.length; i++) {
            console.log(`-----------------\n ${res[i].id} || ${res[i].first_name} ${res[i].last_name}`);
        }
        console.log("--------------------------------------------------------");
    });
};

function queryAllDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.log("-------------------- Departments -----------------------");

        for (var i = 0; i < res.length; i++) {
            console.log(`-----------------\n ${res[i].id} || ${res[i].department_name}`);
        }
        console.log("--------------------------------------------------------");
    });
};

function queryAllRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.log("------------------------Roles--------------------------");

        for (var i = 0; i < res.length; i++) {
            console.log(`----------------------------------\n ${res[i].id} || ${res[i].title} || $${res[i].salary}`);
        }
        console.log("-------------------------------------------------------");
    });
};

function queryInsEmp() {
    
    console.log("-------------------------------------------------");
    console.log("-------------- Add a New Employee ---------------");
    console.log("-------------------------------------------------");    
    
    inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: "Enter Employee First Name: ",
        },
        {
            type: "input",
            name: "last",
            message: "Enter Employee Last Name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee's ID': ",
        },
        {
            type: "input",
            name: "role",
            message: "Enter Employee's Role ID: ",
        },
        {
            type: "input",
            name: "department",
            message: "Enter Employee's Department ID: ",
        },
    ]).then(answer => {

        connection.query(
            "INSERT INTO employees SET ?",
            {
                id: answer.id,
                first_name: answer.first,
                last_name: answer.last,
                role_id: answer.role,
                department_id: answer.department

            }, function (err, res) {
                if (err) throw err;
                queryAllEmployees();

                console.log('done')
            })
    })
}

function queryInsDept() {

    console.log("-------------------------------------------------");
    console.log("-------------- Add a New Department ---------------");
    console.log("-------------------------------------------------");  
    
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter New Department's ID: ",
        },
        {
            type: "input",
            name: "deptName",
            message: "Enter New Department's Name: ",
        },
    ]).then(answer => {
        connection.query(
            "INSERT INTO departments SET ?",
            {
                id: answer.id,
                department_name: answer.deptName,

            }, function (err, res) {
                if (err) throw err;
                console.log("inserted")
                queryAllDepartments();
            })
    })
}

function queryInsRole() {

    console.log("---------------------------------------------");
    console.log("-------------- Add a New  Role---------------");
    console.log("---------------------------------------------");    

    inquirer.prompt([
        {
            type: "input",
            name: "deptID",
            message: "Enter New Role's Department's ID: ",
        },
        {
            type: "input",
            name: "id",
            message: "Enter New Role's ID: ",
        },
        {
            type: "input",
            name: "title",
            message: "Enter New Role's Name: ",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter New Role's Salary as a Whole #: ",
        },
    ]).then(answer => {
        connection.query(
            "INSERT INTO roles SET ?",
            {
                id: answer.id,
                department_id: answer.deptID,
                title: answer.title,
                salary: answer.salary

            }, function (err, res) {
                if (err) throw err;
                console.log("inserted")
            })
    })
}

function updateEmp() {
    inquirer.prompt([
        {
            type: "input",
            name: "empID",
            message: "Select Employee to edit by ID: ",
        },
        {
            type: "input",
            name: "newRoleID",
            message: "Choose the ID of the Employee's new Role (refer to roles table): ",
        },
    ]).then(answer => {
        connection.query(
            "UPDATE employees SET ? WHERE ?",
            [
                {
                    role_id: answer.newRoleID
                },
                {
                    id: answer.empID
                }
            ],
            function (err, res) {
                if (err) throw err;
                queryAllEmployees();

                console.log("updated")
            })
    })
}

//write functions that display better table data
//write joins to display data better

init();