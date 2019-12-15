

/* Departments */
INSERT INTO departments (id, department_name) VALUES (1, 'Accounting');
INSERT INTO departments (id, department_name) VALUES (2, 'Marketing');
INSERT INTO departments (id, department_name) VALUES (3, 'Human_Resources');
INSERT INTO departments (id, department_name) VALUES (4, 'Research_and_Development');
INSERT INTO departments (id, department_name) VALUES (5, 'Production');
INSERT INTO departments (id, department_name) VALUES (6, 'Purchasing');

/* ---------- ROLES --------- */

/* Accounting */
INSERT INTO roles (id, department_id, title, salary) VALUES (11, 1, 'Accounts_Receivable', 40000);
INSERT INTO roles (id, department_id, title, salary) VALUES (12, 1, 'Accounts_Payable', 42500);
INSERT INTO roles (id, department_id, title, salary) VALUES (13, 1, 'Payroll', 39000);
INSERT INTO roles (id, department_id, title, salary) VALUES (14, 1, 'Controls', 85000);
INSERT INTO roles (id, department_id, title, salary) VALUES (15, 1, 'Reporting', 100000);

/* Marketing */
INSERT INTO roles (id, department_id, title, salary) VALUES (21, 2, 'PPC_Specialist', 49500);
INSERT INTO roles (id, department_id, title, salary) VALUES (22, 2, 'SEO_Specialist', 78000);
INSERT INTO roles (id, department_id, title, salary) VALUES (23, 2, 'CRO_Designer', 40000);
INSERT INTO roles (id, department_id, title, salary) VALUES (24, 2, 'Developer', 66000);
INSERT INTO roles (id, department_id, title, salary) VALUES (25, 2, 'Social_Media_Outreach', 37000);
INSERT INTO roles (id, department_id, title, salary) VALUES (26, 2, 'Sales', 59000);

/* Human Resources */
INSERT INTO roles (id, department_id, title, salary) VALUES (31, 3, 'Recruiter', 50000);
INSERT INTO roles (id, department_id, title, salary) VALUES (32, 3, 'Compliance', 55000);
INSERT INTO roles (id, department_id, title, salary) VALUES (33, 3, 'Employer-Employee_Relations', 53000);
INSERT INTO roles (id, department_id, title, salary) VALUES (34, 3, 'Compensation_and_Benefits', 67000);
INSERT INTO roles (id, department_id, title, salary) VALUES (35, 3, 'Safe-Environment', 82000);
INSERT INTO roles (id, department_id, title, salary) VALUES (36, 3, 'Training_and_Development', 54500);

/* Research and Development */
INSERT INTO roles (id, department_id, title, salary) VALUES (41, 4, 'New_Product_Research', 94000);
INSERT INTO roles (id, department_id, title, salary) VALUES (42, 4, 'New_Product_Development', 101000);
INSERT INTO roles (id, department_id, title, salary) VALUES (43, 4, 'Existing_Product_Updates', 75000);
INSERT INTO roles (id, department_id, title, salary) VALUES (44, 4, 'Innovation', 58000);

/* Production */
INSERT INTO roles (id, department_id, title, salary) VALUES (51, 5, 'Planning_and_Scheduling', 50000);
INSERT INTO roles (id, department_id, title, salary) VALUES (52, 5, 'Machine_Head', 55000);
INSERT INTO roles (id, department_id, title, salary) VALUES (53, 5, 'Machine_Laborer', 53000);
INSERT INTO roles (id, department_id, title, salary) VALUES (54, 5, 'Quality_Control', 67000);
INSERT INTO roles (id, department_id, title, salary) VALUES (55, 5, 'Inventory', 58000);

/* Purchasing */
INSERT INTO roles (id, department_id, title, salary) VALUES (61, 6, 'Strategic_Purchasing', 61000);
INSERT INTO roles (id, department_id, title, salary) VALUES (62, 6, 'Operational_Purchasing', 47500);
INSERT INTO roles (id, department_id, title, salary) VALUES (63, 6, 'Supplier_Relations', 116000);
INSERT INTO roles (id, department_id, title, salary) VALUES (64, 6, 'Ordering', 62500);



/* Employees */


INSERT INTO employees (id, first_name, last_name, role_id, department_id, manager_id) 
    VALUES (
        -- id
            29,
--         --first name--
            'Jasmine',
--         --last name--
            'Duncan',
        -- role ID--
            42,
--         --department_id--
            4,
--         --manager_id
            null
    );

INSERT INTO employees (id, first_name, last_name, role_id, department_id, manager_id) 
    VALUES (
--         --id--
            31,
--         --first name--
            'Robert',
--         --last name--
            'Dunfield',
        -- role ID--
            44,
--         --department_id--
            4,
--         --manager_id
            29
    );

    INSERT INTO employees (id, first_name, last_name, role_id, department_id, manager_id) 
    VALUES (
--         --id--
            39,
--         --first name--
            'Haley',
--         --last name--
            'Joel-Osment',
        -- role ID--
            22,
--         --department_id--
            2,
--         --manager_id
            null
    );

    INSERT INTO employees (id, first_name, last_name, role_id, department_id, manager_id) 
    VALUES (
--         --id--
            49,
--         --first name--
            'John',
--         --last name--
            'Titor',
        -- role ID--
            12,
--         --department_id--
            1,
--         --manager_id
            null
    );

    INSERT INTO employees (id, first_name, last_name, role_id, department_id, manager_id) 
    VALUES (
--         --id--
            56,
--         --first name--
            'Michael',
--         --last name--
            'Anthony',
        -- role ID--
            12,
--         --department_id--
            1,
--         --manager_id
            49
    );

