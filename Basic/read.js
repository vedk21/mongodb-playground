use champions_league;

// read document or set of documents matching a filter condition
// db.<COLLECTION_NAME>.find(<FILTER>)
db.teams.find(
  {
    country: 'GERMANY'
  }
).pretty();

// read one single document
db.teams.findOne(
  {
    country: 'GERMANY'
  }
);

// NOTE: findOne doesn't support pretty()
