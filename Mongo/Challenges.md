# MongoDB Challenges

In this challenge we want you to create a MongoDB database and collection.  We're going to challenge you to create the database using the cheat sheet:
* https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

And the tutorial:
* https://www.mongodb.com/resources/products/fundamentals/create-database

The CRUD operations documentation:
* https://www.mongodb.com/docs/manual/crud/

**Optional**

If you want to go further in this challenge, how would you create a validation for your documents in the collection.  A handy reference:
* https://www.mongodb.com/docs/manual/core/schema-validation/specify-json-schema/#std-label-schema-validation-json

## The task

In the JavaScript course you used data for the **Sock Exchange**.

We want you to create the Sock Exchange as a database, with some extras.

### The first collection

The **sock** collection should contain the following fields:
* sockOwner
* size
* color
* pattern
* material
* condition
* forFoot

In this collection add some documents.  You can make up the data, but remember to keep the keys the same.

You should aim to have at least 10 socks.

#### Optional

If you have the validator document in your collection definition then you should have the following restrictions:

* **size** must be an integer in the range of 1 to 14
* **condition** should only allow strings of:
    * excellent
    * good
    * used
* **forFoot** should only allow the strings **left**, **right** or **both**

### Collection 2

People need socks so we need a **customer** collection:
* name
* mobile
* email
* state

Using the names associated in your 10 socks, and you may duplicate the names in the socks.  Add the names to this collection with details.  Ideally you should have at least 5 names.

#### Optional

As per collection 1 create a validator document to ensure the following:
* **state** contains 2, but no more than 3 characters and must be uppercase (if possible)
* **email** must contain an @ symbol.  For the more daring see if you can apply a proper Email check

## Queries

1. Find all socks that are **used**
2. Find all **left** footed socks and display just their owners
3. Display all socks in **descending order** of **size**
4. Find all owners who **state** is in **NY, MN** and **CT**
5. Display all socks whose **size** is **greater than 10**
6. Display the name and mobile number of **customers** whose **state** starts with a letter greater than **L**
7. Delete all socks whose **size** is less then **3**