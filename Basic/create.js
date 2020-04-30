use champions_league;

// insert data into collection (single document)
// db.<COLLECTION_NAME>.insertOne(<DOCUMENT>)
db.teams.insertOne(
  {
    team_name: 'DORTMUND',
    country: 'GERMANY',
    won_the_competition: 1,
    current_champions: 0
  }
);

// insert many documents at once
// db.<COLLECTION_NAME>.insertMany([<DOCUMENT1>, <DOCUMENT2>, ..., <DOCUMENTn>])
db.teams.insertMany(
  [
    {
      team_name: 'DORTMUND',
      country: 'GERMANY',
      won_the_competition: 1,
      current_champions: 0
    },
    {
      team_name: 'REAL MADRID',
      country: 'SPAIN',
      won_the_competition: 13,
      current_champions: 0
    }
  ]
);

// NOTE: If collection doesn't already exists, these insert commands will create collection first and then add document/s to it.
// Also it will create _id on its own if not provided in document
