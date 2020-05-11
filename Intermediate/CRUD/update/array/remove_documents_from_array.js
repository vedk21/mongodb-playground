use champions_league;

// If we want to remove documents from array we use $pull or $pop operator

// $pull - remove documents based on condition
db.teams.updateMany(
  {
    "team_name" : "DORTMUND"
  },
  {
    $pull: {
      matches: {
        stadium: 'Allianz Arena' // we can have any type of filter condition here
      }
    }
  }
);

// $pop - remove documents from top or bottom of array (first or last)
db.teams.updateMany(
  {
    "team_name" : "Bayern Munich"
  },
  {
    $pop: {
      matches: 1 // 1 -> last document, -1 -> first document
    }
  }
);
