use champions_league;

// If we want to update the all documents inside an array, we use '$[]' operator like follows
db.teams.updateMany(
  {
    "team_name" : "DORTMUND"
  },
  {
    $set: {
      "matches.$[].well_trained": 'Yes' // this adds new field in every array document in matched document
    }
  }
);

// NOTE: $[] works as a placeholder - representing all the documents inside an array
