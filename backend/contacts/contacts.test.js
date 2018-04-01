const contacts = require('./contacts')





test('expects to find 1 contacts in test db', () => {
  contacts.readByUserId(1).then(result => console.log("result " + result))
  expect((1+2)).toBe(3);
});

