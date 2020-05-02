use champions_league;

// MongoDB doesn't force developer for an exact schema like sql
// But for applications to work functionally less challenging, schema like sql dbs or partial schemas are necessary
// exact schema
db.teams.insertMany(
  {
    team_name: 'DORTMUND',
    country: 'GERMANY'
  },
  {
    team_name: 'REAL MADRID',
    country: 'SPAIN'
  }
);


// partial schemas
db.teams.insertMany(
  {
    team_name: 'DORTMUND',
    country: 'GERMANY'
  },
  {
    team_name: 'DORTMUND',
    country: 'GERMANY',
    records: {
      won_champions_league: 13,
      won_la_liga: 10
    }
  }
);
