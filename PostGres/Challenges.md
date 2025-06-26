# Self paced exercises

These exercises will allow you to get to grips with the SQL language and using Postgres.

The original URLs for these exercises are:

* Tutorials
    * BASICS = https://nuitrcs.github.io/databases_workshop/sql/part1.html
    * JOINS = https://nuitrcs.github.io/databases_workshop/sql/part2.html
    * DDL = https://nuitrcs.github.io/databases_workshop/sql/part3.html
    * TRANSACTIONS = https://nuitrcs.github.io/databases_workshop/sql/part4.html

* Exercises
    * https://nuitrcs.github.io/databases_workshop/sql/part1_exercises.html
    * https://nuitrcs.github.io/databases_workshop/sql/part2_exercises.html

If you are new to SQL then work through these labs to get an understanding of how to use the language, both in querying data, and creating schemas and data.

# Challenge

For those familiar with SQL, we want you to create the Sock Exchange database but with more detail and relationships.

Design the schema so that you have the following objects:
* Socks
    * Details about the socks, including prices, styles, etc
* Customers
    * Details about people who own or want socks
* Orders
    * Details of sales of socks and their type

You should design the schema and ensure that the design covers **referential integrity**, **primary** and **foreign** keys and any **constraints** you think should apply to columns.

When defining your table use a combination of adding the **PRIMARY** key when creating the table and adding it after table creation.

You should ensure that your Orders reflect the price at the point of sale, and remember that **Customers** may by more than 1 sock or pair of socks.

Add data to your tables.

Create 5 queries against your data, or which 1 should be a multi-table join (ideally 2+).  One of these joins should be able to provide the history of a customers sock purchase that should include the customers details, sock details and the orders.