use champions_league;

// If we want to update the documents inside an array for which the condition is matched, we use '$' operator like follows
db.teams.updateMany(
  {
    "matches.is_interview_scheduled": true
  },
  {
    $set: {
      "matches.$": {
        day: '27-09-2020',
        scheduled: true
      } // this overwrites the complete document which was matched
    }
  }
);

db.teams.updateMany(
  {
    "matches.is_interview_scheduled": true
  },
  {
    $set: {
      "matches.$.lucky_draw": false // this adds new field to document which was matched
    }
  }
);

// NOTE: $ works as a placeholder - representing the first matched document inside an array
