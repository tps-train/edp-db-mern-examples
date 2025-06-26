# Node Challenge

In this challenge we want you to choose either Mongo or Postgres as your backend to work with.

## The challenge

Create a command line tool that will allow you to perform CRUD operations on a database.

If you are using Postgres, then work with the **dvdrental** from https://neon.com/postgresqltutorial/dvdrental.zip.

If you are using MongoDB then you should work with the socks exmaple we've been looking at.
* You can import JSON into a Mongo database, so if you don't have any sock data, then use the JSON from the earlier labs, and Google for importing JSON into a Mongo database.

### What you should do

1. Be able to perform a READ operation on any table in the database, returning all data.
2. CREATE data in the table by INSERTing a new record into the table
3. READ the data that was just inserted to confirm it is there
4. UPDATE one of the values of the record you just instered
5. DELETE the record you just added

### Optional

Find out how to get input from a user - hint **readline**.

* Add a menu to your code, so that the user can choose their CRUD operation.
* Provide the relevant prompts to allow the user to enter the data to INSERT, UPDATE, READ or DELETE
* Provide the relevant response, e.g. if they inserted, then show the data by READing it back from the database and showing it to the user.

### Optional 2

Allow the INSERT data to be read from a file.  This should allow for multiple inserts.
