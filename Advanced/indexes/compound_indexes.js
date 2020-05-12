use contactDetails;

// Compound indexes are indexes with combination of multiple fields in same document
db.contacts.createIndex(
  {
    "dob.age": 1,
    gender: 1
  }
);

// NOTE: It will still create a single index only, but it will be combination of 2 fields.
// Index will be sorted on "dob.age" first and then on gender if "dob.age" is same.
// Example: dob.age  gender
            // 32     female
            // 32     male
            // 32     male
            // 33     female
            // 33     female
            // 33     male
// Index scan strategy will only be used when we are either searching for (dob.age and gender) together or searching for dob.age only. It will not use this index if we are only searching for gender.

// Indexes can also be used while sorting
db.contacts.find(
  {
    "dob.age": {
      $gt: 70
    }
  }
).sort(
  {
    gender: 1
  }
);
