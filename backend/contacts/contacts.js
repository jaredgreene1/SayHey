const db = require('../db/db.js')

const MAGIC_RIPENESS_NUMBER = 365


async function create(userId, data) {
  return await db.createContact(userId, data)
}

async function readByUserId(userId) {
  return db.readContactsByUserId(userId) 
}

async function update(data) {
  return db.updateContact(data) 
}

async function del(data) {
  return db.deleteContact(data) 
}

function contactIsRipe(contactInfo, events) {
  console.log('checking: ' + contactInfo.firstName);
  console.log('with events: ' + events);
  if (events === undefined || events.length == 0) 
    return true

  let mostRecent = events[0] 
  let daysSinceEvent = dateDiffInDays(new Date(mostRecent.date), new Date())
  if (daysSinceEvent * contactInfo.proximity > MAGIC_RIPENESS_NUMBER) {
    return true
  } else {
    return false
  }
}


function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  console.log('date a: ' + a)
  console.log('date b: ' + b)
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

async function getRipeContacts(userId) {
  let eventsByContact = {}
  let contacts = await db.readContactsByUserId(userId)

  console.log(contacts)

  for (i = 0; i < contacts.length; i++) {
    contactId = contacts[i].id
    console.log('id: ' + contactId)
    eventsByContact[contactId] = await db.readContactEventsByContactId(contactId)
  }

  return contacts.filter(
    contact => contactIsRipe(contact, eventsByContact[contact.id])
  );
};

async function logComm(data) {
  return db.createCommEvent(data)
};

module.exports = {
  create,
  readByUserId,
  update,
  del,
  getRipeContacts,
  logComm,
  contactIsRipe,
  dateDiffInDays
}
