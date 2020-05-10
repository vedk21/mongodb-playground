use champions_league;

// If we have to find all documents who has certain value inside an array of documents we have following query

/*
  Schema:
  {
    team_name: 'DORTMUND',
    matches: [
      {
        date: '22-06-2020',
        is_home_match: true
      },
      {
        date: '08-07-2020',
        is_home_match: false
      }
    ]
  }
*/
db.teams.find(
  {
    "matches.is_home_match": true
  }
);

// Find the document with exact size of array field
db.teams.find(
  {
    matches: {
      $size: 2
    }
  }
);

// NOTE: value for $size must a whole number, we cannot pass greater than or less than here.

// Find all documents with array of documents has given values irrespective of order
/*
  Schema:
  {
    team_name: 'MANCHESTER UNITED',
    jerseys: [
      'black',
      'blue',
      'red',
      'pink'
    ]
  },
  {
    team_name: 'LIVERPOOL',
    jerseys: [
      'red',
      'black',
      'purple'
    ]
  }
*/
db.teams.find(
  {
    jersey: {
      $all: [
        'red',
        'black'
      ]
    }
  }
);

// Find all documents where array of documents matches multiple conditions given
/*
  Schema:
  {
    team_name: 'DORTMUND',
    matches: [
      {
        stadium: 'Signal Induna Park',
        is_interview_scheduled: true
      },
      {
        stadium: 'Mercedes Benz Arena',
        is_interview_scheduled: false
      }
    ]
  },
  {
    team_name: 'Bayern Munich',
    matches: [
      {
        stadium: 'Signal Induna Park',
        is_interview_scheduled: false
      },
      {
        stadium: 'Allianz Arena',
        is_interview_scheduled: true
      }
    ]
  }
*/
db.teams.find(
  {
    matches: {
      $elemMatch: {
        stadium: 'Signal Induna Park',
        is_interview_scheduled: true
      }
    }
  }
);

// NOTE: $elemMatch make sure all conditions given to it is matched on same document and not on different documents individually.
