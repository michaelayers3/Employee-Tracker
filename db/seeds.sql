INSERT INTO department (name)
VALUES ("Marketing"),
       ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("HR");

INSERT INTO role (title, department_id, salary)
VALUES ("Lead Marketer",1, 100000),
       ("Marketer",1, 80000),
       ("Sales Lead",2, 100000),
       ("Salesperson",2, 80000),
       ("Lead Engineer",3, 120000),
       ("Engineer",3, 100000),
       ("Lead Legal Counsel",4, 150000),
       ("Lawyer",4, 120000),
       ("HR Manager",5, 100000),
       ("HR Representative",5, 75000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL),
       ("Jane", "Doe", 2, 1),
       ("Bob", "Smith", 3, NULL),
       ("Sally", "Jones", 4, 3),
       ("Joe", "Smith", 5, NULL),
       ("Billy", "Boi", 6, 5),
       ("Jonathan", "Bejarano", 7, NULL),
       ("Mary", "Jane", 8, 7),
       ("Jill", "Smith", 9, NULL),
       ("Jack", "Smith", 10, 9);