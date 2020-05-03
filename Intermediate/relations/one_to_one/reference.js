use champions_league;

/* one-to-one relationship can be implemented using two approaches, 
 1. Embedded Documents
 2. Reference ids
*/
/*
  -- Embedded documents approach is used when relational data is fetched together than separate collections.

  -- Reference ids approach is used when two related collections are required separately than together most of the time.
*/

// one-to-one relationship with reference ids
db.teams.insertOne(
  {
    team_name: 'MANCHESTER UNITED',
    country: 'ENGLAND',
    stadium: 'old-trafford-1234'
  }
);

db.stadiums.insertOne(
  {
    _id: 'old-trafford-1234',
    stadium_name: 'OLD TRAFFORD',
    location: 'Manchester, England',
    capacity: NumberInt(82000)
  }
);
