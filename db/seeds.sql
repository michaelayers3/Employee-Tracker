INSERT INTO department (id, name)
VALUES (1, "Marketing"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Legal"),
       (5, "HR");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lead Marketer", 100000, 1),
       (2, "Marketer", 80000, 1),
       (3, "Sales Lead", 100000, 2),
       (4, "Salesperson", 80000, 2),
       (5, "Lead Engineer", 120000, 3),
       (6, "Engineer", 100000, 3),
       (7, "Lead Legal Counsel", 150000, 4),
       (8, "Lawyer", 120000, 4),
       (9, "HR Manager", 100000, 5),
       (10, "HR Representative", 75000, 5);

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