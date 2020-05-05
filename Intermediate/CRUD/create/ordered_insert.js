use champions_league;

// By default, the mongodb try to insert documents in order. Hence if there is an error in inserting any document, it will throw an error and will not continue with next set of documents
// But we can change this behaviour by setting 'ordered' flag to false while inserting into mongodb.

db.teams.insertMany(
  [
    {
      _id: 'barca',
      team_name: 'BARCELONA',
      country: 'SPAIN'
    },
    {
      _id: 'juv',
      team_name: 'JUVENTUS',
      country: 'ITALY'
    }
  ]
);

// lets say 'barca' already exist in db, then it will throw an _id already present error and will not add _id: 'juv' to db.

// ordered false
db.teams.insertMany(
  [
    {
      _id: 'barca',
      team_name: 'BARCELONA',
      country: 'SPAIN'
    },
    {
      _id: 'juv',
      team_name: 'JUVENTUS',
      country: 'ITALY'
    }
  ],
  {
    ordered: false // by default its true
  }
);

// In above case it will still add juventus to db, even if barca is failed
