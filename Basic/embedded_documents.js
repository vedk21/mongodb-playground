use champions_league;

// we can add embedded documents into existing document or else an embedded array
db.teams.insertMany(
  {
    team_name: 'BARCELONA',
    country: 'SPAIN',
    details: {
      founded_in: 1910,
      nickname: 'blaugrana'
    },
    tournaments: [
      {
        name: 'La Liga',
        position: 2
      },
      {
        name: 'Champions League',
        position: 'Quarter Final'
      }
    ]
  }
);

// NOTE: we can only nest embedded documents or array maximum to 100 levels
// Also maximum size of one document can only be 16 MB only
