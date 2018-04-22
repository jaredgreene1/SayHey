const crypto = require('crypto')
const db = require('../db/db')

function create(userData){
 const salt = crypto.randomBytes(256);
 userData.password = hashPass(userData.password + salt)
 userData.salt = salt
 db.createUser(userData)
}

const hashPass = (pass) => {
  let hasher = crypto.createHash('sha256')
  hasher.update(pass)
  return hasher.digest('hex')
}

module.exports = {
  create
}
