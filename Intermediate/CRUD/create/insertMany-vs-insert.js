use champions_league;

// The important difference between insert and insertMany/insertOne
// insert method returns generic bulkWriteResult or writeResult
// vs insertMany/insertOne method returns insertedIds information in response

// insert method can be used to insert one or more documents
// single
db.teams.insert(
  {
    team_name: 'DORTMUND',
    country: 'GERMANY'
  }
);

// multiple
db.teams.insert(
  [
    {
      team_name: 'DORTMUND',
      country: 'GERMANY'
    },
    {
      team_name: 'Real Madrid',
      country: 'SPAIN'
    }
  ]
);
