const fs = require('fs');

const userFile = fs.readFileSync (__dirname + '/obj.json','utf-8')
const users = JSON.parse(userFile);

const adults = users.filter((user)=>{
    return user.age >= 100;
})

console.log(adults);