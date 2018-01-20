const path = require('path');
const fs = require('fs');
const generateId = require('time-uuid');

const userDataPath = path.normalize('./user-data/');
const contactPath = path.join(userDataPath, 'contacts');


exports.createContact = function createContact(data) {
  const uuid = generateId();
  const fileName = data.name + "_" + uuid + '.json';
  const filePath = path.join(contactPath, fileName);
  fs.writeFile(filePath, JSON.stringify(data));
}


exports.loadContacts = function loadContacts() {
  var contactData = {};
  files = fs.readdirSync(contactPath);
  console.log("Loading contact files: "); 
  console.log(files); 
 
  contactData = files.reduce(function(dataList, file){
    data = JSON.parse(fs.readFileSync(path.join(contactPath,file)));
    dataList[path.parse(file).name] = data;
    console.log("Loading contact data: "); 
    console.log(data);
    return dataList;
  }, {});
  return contactData;
};
