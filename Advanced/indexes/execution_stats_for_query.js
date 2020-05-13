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

// queryPlanner returns basic stats regarding execution of query
db.contacts.explain('queryPlanner').find(
  {
    "dob.age": {
      $gt: 70
    }
  }
);

// allPlansExecution returns detailed stats regarding execution of query
// this returns even the rejected plans stats, showing if they were run, what would have been the stats
db.contacts.explain('allPlansExecution').find(
  {
    "dob.age": {
      $gt: 70
    }
  }
);
