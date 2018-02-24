const path = require('path');
const fs = require('fs');

const userDataPath = path.normalize('./user-data/');
const contactPath = path.join(userDataPath, 'contacts');


exports.createContact = function createContact(data) {
  const fileName = data.uuid + '.json';
  const filePath = path.join(contactPath, fileName);
  fs.writeFile(filePath, JSON.stringify(data));
}

function getContacts() {
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


function getRipeContacts() {
  //Ripe contacts are contacts that it is time to reach out to
  const contacts = getContacts()
  var ripeContacts = []

  Object.keys(contacts).map(
    id => {
      const lastContact = 10
      if (contacts[id].proximity * lastContact > 50)
        ripeContacts.push({id: contacts[id]})
    })
  
  return ripeContacts;

};

exports.getContacts = getContacts 
exports.getRipeContacts = getRipeContacts
