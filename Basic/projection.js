use champions_league;

// projection used to select only the part of data
// db.<COLLECTION_NAME>.find(<FILTER>, <PROJECTION>)
db.teams.find(
  {
    country: 'GERMANY'
  },
  {
    team_name: 1,
    _id: 0
  }
);

// NOTE: _id is by default added into the projection, in order to neglect _id it has to be specifically mentioned in projection 
