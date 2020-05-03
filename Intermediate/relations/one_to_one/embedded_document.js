use champions_league;

/* one-to-one relationship can be implemented using two approaches, 
 1. Embedded Documents
 2. Reference ids
*/
/*
  -- Embedded documents approach is used when relational data is fetched together than separate collections.

  -- Reference ids approach is used when two related collections are required separately than together most of the time.
*/

// one-to-one relationship with embedded documents
db.teams.insertOne(
  {
    team_name: 'MANCHESTER UNITED',
    country: 'ENGLAND',
    team_details: {
      base_location: 'Manchester, England',
      nickname: 'Red Devils',
      home_jersey_color: 'red',
      away_jersey_color: 'white'
    }
  }
);

// Here in this example it is most likely that teams will be fetched along with the details, hence embedded document approach is used.
