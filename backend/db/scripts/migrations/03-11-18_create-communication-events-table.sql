CREATE TABLE CommunicationEvents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(124), 
  contactID INT, 
  FOREIGN KEY (contactID) REFERENCES Contacts(id)
);



