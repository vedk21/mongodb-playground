use champions_league;

// delete existing document
// db.<COLLECTION_NAME>.deleteOne(<FILTER>)
db.teams.deleteOne(
  {
    country: 'GERMANY'
  }
);

// delete multiple documents
// db.<COLLECTION_NAME>.deleteMany(<FILTER>)
db.teams.deleteMany(
  {
    country: 'GERMANY'
  }
);

// NOTE: If we only specify {} empty curly braces, then it will delete all documents from collection
