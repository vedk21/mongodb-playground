use champions_league;

// If we want to update all the documents inside an array for which the condition is matched, we use '$[el]' operator like follows
db.teams.updateMany(
  {
    "matches.is_interview_scheduled": true
  },
  {
    $set: {
      "matches.$[el].active_fans": 45000 // this adds a new field to all documents which were matched
    }
  },
  {
    arrayFilters: [
      {
        "el.is_interview_scheduled": true // we can have completely different condition here
      }
    ]
  }
);

// NOTE: $[el] works as a placeholder - representing all the documents inside an array which matched the condition given in arrayFilters

// Condition given in query and in arrayFilters don't have to match, also we can have any string representing the placeholder such as $[element], $[place], $[xyz]
