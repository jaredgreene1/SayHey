const crypto = require('crypto')
const db = require('../db/db')

function create(userData){
  console.log("NEW USER: ")
  console.log(userData)
 //const salt = crypto.randomBytes(256);
 const salt = "hello"
 userData.password = hashPass(userData.password + salt)
 userData.salt = salt
 db.createUser(userData)
}

async function validate(credentials){
  console.log("VALIDATING USER: ")
  console.log(credentials)
 const dbReturn = await db.readUserData(credentials.email)
 const userData = dbReturn[0]
 console.log(userData)
 if (userData.password === hashPass(credentials.password + userData.salt)) {
   console.log("successful login")
   return userData.id
 } else {  
    console.log("unsuccessful login")
    return null
  }
}

const hashPass = (pass) => {
  let hasher = crypto.createHash('sha256')
  hasher.update(pass)
  return hasher.digest('hex')
}

module.exports = {
  create,
  validate
}
