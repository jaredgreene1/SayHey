const path = require('path');
const fs = require('fs');

const userDataPath = path.normalize('./user-data/');
const contactPath = path.join(userDataPath, 'contacts');


exports.createContact = function createContact(data) {
  const fileName = data.uuid + '.json';
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
    dataList[data.uuid] = data;
    console.log("Loading contact data: "); 
    console.log(data);
    return dataList;
  }, {});
  return contactData;
};
