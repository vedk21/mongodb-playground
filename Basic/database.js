// Create database in mongo
// use <DATABASE_NAME>;
use champions_league;

// same command is used to use existing database as well

// Create collection in mongo
// SHORTCUT
// db.<COLLECTION_NAME>.insert(<DOCUMENT>);
db.teams.insert({
  team_name: 'DORTMUND',
  country: 'GERMANY',
  won_the_competition: 1,
  current_champions: 0
});