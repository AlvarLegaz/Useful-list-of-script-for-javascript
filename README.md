# Useful list of script for javascript
A repository with a list of useful scripts for automating tasks using JavaScript.

## Scrip to convert a JSON user list in entires for SQL database

In this example, a *json file* (users.json) containing a list of users is available. The goal is to *automatize the process* of inputting the different users into a database.
**Filename: users.json**
```
{
    "users" : [
        {
            "user": "Paco",
            "password": "12345",
            "position": "Developer",
            "department":"Engineering",
            "office": "Murcia",
            "working": true
        },
        {
            "user": "Maria",
            "password": "2211",
            "position": "Data Scientist ",
            "department":"Engineering",
            "office": "Madrid",
            "working": false
        },
        {
            "user": "Marta",
            "password": "0001",
            "position": "UX Designer",
            "department":"Engineering",
            "office": "Murcia",
            "working": true
        }
    ]
}
```
