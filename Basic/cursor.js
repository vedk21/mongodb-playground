use champions_league;

// cursor is an pointer pointing to the set of documents, the cursor timeout after 10 minutes of inactivity
// developers can iterate through cursor to get documents
// db.<COLLECTION_NAME>.find(<FILTER>) // returns cursor to set of documents matching the filter
db.teams.find(
  {
    country: 'GERMANY'
  }
);

// MongoDB shell return maximum first 20 documents matching the filter, automatically iterate through the iterator.

// we can also use various methods on cursor to retrieve data, manipulate data before returning as well
// toArray(), forEach(), pretty()
db.teams.find(
  {
    country: 'GERMANY'
  }
).toArray();

db.teams.find(
  {
    country: 'GERMANY'
  }
).forEach((doc) => printjson(doc)); // printjson is a method given by mongo to print document

db.teams.find(
  {
    country: 'GERMANY'
  }
).pretty();

// NOTE: We can only use pretty on find and not on findOne because findOne doesn't return cursor but a single document only.
