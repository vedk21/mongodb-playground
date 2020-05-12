use contactDetails;

// In order to get stats for a read, update, delete query, we can use explain() method over a collection
db.contacts.explain().find(
  {
    "dob.age": {
      $gt: 70
    }
  }
);

// to get execution stats specifically regarding what strategy was used by mongoDB, we use "executionStats" as a parameter to explain method
db.contacts.explain('executionStats').find(
  {
    "dob.age": {
      $gt: 70
    }
  }
);
