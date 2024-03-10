/* 
Name:       JSON2SQLScript.js
Briefly:    Script to convert JSON users list in entries for SQL Database.
version:    1.0
Date:       03/10/2024
Created by: ALegaz
*/

// Get the JSON with Node function FS.
const fs = require('fs');

//Loads a json file using the fs function of Node. Then it allows to resolve the asynchrony using callback or promises.
const resolveByPromises = true;
const resolveByllback = false;

if(resolveByPromises){
    // This function reads a json file, return an array of users and generate a SQL query to insert the array in a database. 
    // Note that fs is an asynchronous function, so you cannot access the array until the callback, promises or async await is resolved.
    // In this case, promises have been used to resolve the promises and async await function.
    async function jsonToSqlInsert(file_path,options,table_name)
    {
        try{
            let data = await fs.promises.readFile(file_path, options);
            let obj = JSON.parse(data);
            let users_list = obj.users;
    
            //Generate the querys to insert JSON elements in database.
            users_list.forEach(element => {
                console.log("INSET INTO " + table_name +" (user, password, position, department, office, working) VALUE ('"
                + element.user+"','"
                + element.password+"','"
                + element.position+"','"
                + element.department+"','"
                + element.office+"','"
                + element.working+"')"
                );
            });
        } catch(err){
            console.error(err);
        }
    }
    
    jsonToSqlInsert('users.json', 'utf8', 'UsersDB');
}

if(resolveByllback){
// This function reads a json file and returns an array of users 
// Note that fs is an asynchronous function, so you cannot access the array until the callback, promises or asyn await is resolved.
// In this case, callback have been used to resolve the asyn function.
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        let obj = JSON.parse(data);
        let array = obj.users;
        users_list = array;
        
        //Generate the querys to insert JSON elements in database.
        var table_name = "UsersDB";
        users_list.forEach(element => {
            console.log("INSET INTO " + table_name +" (user, password, position, department, office, working) VALUE ('"
            + element.user+"','"
            + element.password+"','"
            + element.position+"','"
            + element.department+"','"
            + element.office+"','"
            + element.working+"')"
            );
        });
    });
}