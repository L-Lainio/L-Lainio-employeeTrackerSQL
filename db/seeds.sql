\c employee_db;
INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Interconnected'),
        ('Sales'),
        ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Engineering Manager', 120000, 1),
        ('Engineering Lead', 100000, 1),
        ('Staff Engineer', 80000, 1),
        ('Finance Manager', 85000, 2),
        ('Accountant', 70000, 2),
        ('Brand Advocate Manager', 95000, 3),
        ('Brand Advocate Sr. Analyst', 82000, 3),
        ('Brand Advocate Analyst', 70000, 3),
        ('Sales Manager', 75000, 4),
        ('Salesperson', 65000, 4),
        ('Legal Manager', 110000, 5),
        ('Lawyer', 95000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ('Tom', 'Brady', 1, 1),
        ('Thomas', 'The Tank Engine', 2, 2),
        ('Thomas', 'Calle', 3, 3),
        ('Thomas', 'Shelby', 4, 4),
        ('Thomas', 'Hobbes', 5, 5),
        ('Tom', 'Hanks', 6, 6),
        ('Tom', 'Holland', 7, 7),
        ('Tom', 'Ford', 8, 8),
        ('Thomas', 'The Apostle', 9, 9),
        ('Tom', 'Cruise', 10, 10);
