use contactDetails;

// We can add indexes with different configurations.
// unique - It creates an index with unique criteria on that field, and don't allow any duplicate entry to be inserted into collection. By default, _id is an unique index.
db.contacts.createIndex(
  {
    email: 1
  },
  {
    unique: true
  }
);

// partialFilterExpression - This will create partial indexes, which will store less number of records in index list according to the filter condition given here.
db.contacts.createIndex(
  {
    email: 1
  },
  {
    partialFilterExpression: {
      gender: 'male'
    }
  }
);

// This index will only save index info for email with gender male.

// NOTE: Difference between partial vs compound index:
// In partial index, limited indexes are stored, hence saves lot of space on disk. Also improves write performance as in above example female records will not be saved for indexes hence faster performance.

// Combination of partialFilterExpression and unique
db.contacts.createIndex(
  {
    email: 1
  },
  {
    unique: true,
    partialFilterExpression: {
      email: {
        $exists: true
      }
    }
  }
);

// NOTE: This makes sure that document with no email field will not be saved for indexing. Hence we can have multiple documents without email.
// If we don't use that partialFilterExpression, then mongoDB will throw an error while inserting multiple documents without email field as it will use no email field as unique index also.

// time-to-live indexes
// we can use indexes to remove documents from collection once expired using 'expireAfterSeconds'
db.contacts.createIndex(
  {
    createdAt: 1
  },
  {
    expireAfterSeconds: 300
  }
);

// This will delete documents which has been created before 5 minutes

// NOTE: this index only works on date fields and non-compound indexes
