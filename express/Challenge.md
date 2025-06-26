# Express Challenge

Now we want you to build a RESTful API using Node.js and Postgres **dvdrental** database.

You should provide endpoints for the tables such as **actors**, **filns** and other tables you like the sound of.

You should provide search capabilities to;
* Show all items from the object
* Show a specific object by **id** or **by name**
* Add an update feature to change specific values for an object

Your service should return:
* A valid HTTP RESPONSE code
    * 200 OK if the action was successful
    * 403 if the document was not found or no data returned
* The data as JSON
    * Or an error message in JSON