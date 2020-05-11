use champions_league;

// If we want to add new documents to existing array of documents, we use $push operator

// adding single document
db.teams.updateMany(
  {
    "team_name" : "DORTMUND"
  },
  {
    $push: {
      matches: {
        stadium: 'Allianz Arena',
        is_interview_scheduled: false
      }
    }
  }
);

// adding multiple documents
db.teams.updateMany(
  {
    "team_name" : "Bayern Munich"
  },
  {
    $push: {
      matches: {
        $each: [
          {
            stadium: 'HDI Arena',
            is_interview_scheduled: true
          },
          {
            stadium: 'Commerzbank Arena',
            is_interview_scheduled: false
          }
        ]
      }
    }
  }
);

// adding multiple documents in sorted order
db.teams.updateMany(
  {
    "team_name" : "DORTMUND"
  },
  {
    $push: {
      matches: {
        $each: [
          {
            stadium: 'Red Bull Arena',
            is_interview_scheduled: true
          },
          {
            stadium: 'Commerzbank Arena',
            is_interview_scheduled: false
          }
        ],
        $sort: {
          stadium: 1 // ascending order
        }
      }
    }
  }
);

// $addToSet - adds new document only if unique
db.teams.updateMany(
  {
    "team_name" : "DORTMUND"
  },
  {
    $addToSet: { // adds the document only if not present already
      matches: {
        stadium: 'Allianz Arena',
        is_interview_scheduled: false
      }
    }
  }
);
