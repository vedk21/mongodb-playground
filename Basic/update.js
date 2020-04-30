use champions_league;

// update the existing document
// db.<COLLECTION_NAME>.updateOne(<FILTER>, {$SET: <FIELDS_TO_UPDATE>})
db.teams.updateOne(
  {
    country: 'GERMANY'
  },
  {
    $SET: {
      team_name: 'BAYERN MUNICH'
    }
  }
);

// update multiple documents
// db.<COLLECTION_NAME>.updateMany(<FILTER>, {$SET: <FIELDS_TO_UPDATE>})
db.teams.updateMany(
  {
    country: 'GERMANY'
  },
  {
    $SET: {
      team_name: 'ALL_TEAM'
    }
  }
);

// NOTE: If we use update method, then use of $SET is not mandatory. Whne $SET is not used then it will replace the matching document with given document.
// (Do not use update explicitly, instead use replaceOne if needed to replace document with another or else use updateOne/updateMany)
