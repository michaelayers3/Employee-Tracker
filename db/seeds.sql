INSERT INTO department (id, name)
VALUES (1, "Marketing"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Legal"),
       (5, "HR");

INSERT INTO role (id, title, department_id, salary)
VALUES (1, "Lead Marketer",1, 100000),
       (2, "Marketer",1, 80000),
       (3, "Sales Lead",2, 100000),
       (4, "Salesperson",2, 80000),
       (5, "Lead Engineer",3, 120000),
       (6, "Engineer",3, 100000),
       (7, "Lead Legal Counsel",4, 150000),
       (8, "Lawyer",4, 120000),
       (9, "HR Manager",5, 100000),
       (10, "HR Representative",5, 75000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Smith", 1, NULL),
       (2, "Jane", "Doe", 2, 1),
       (3, "Bob", "Smith", 3, NULL),
       (4, "Sally", "Jones", 4, 3),
       (5, "Joe", "Smith", 5, NULL),
       (6, "Billy", "Boi", 6, 5),
       (7, "Jonathan", "Bejarano", 7, NULL),
       (8, "Mary", "Jane", 8, 7),
       (9, "Jill", "Smith", 9, NULL),
       (10, "Jack", "Smith", 10, 9);