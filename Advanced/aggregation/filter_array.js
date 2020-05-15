use contactDetails;

// We can use $filter to filter out documents and fields from out embedded array of documents on a certain condition
db.friends.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        bestScores: {
          $filter: {
            input: "$examScores", // input array we want to filter out
            as: "exam", // local variable with which iteration will be done
            cond: {
              $gt: [ // we can use various operators in here
                "$$exam.score", // $$ is used to tell mongoDB that its a local variable defined above
                60
              ]
            }
          }
        }
      }
    }
  ]
);

// If we wanted just the best score of individual player
db.friends.aggregate(
  [
    {
      $unwind: "$examScores"
    },
    {
      $project: {
        name: 1,
        score: "$examScores.score" // remember we did unwind the array already, hence $examScores is a single document and not array   
      }
    },
    {
      $group: {
        _id: "$_id",
        name: {
          $first: "$name" // gives the first element in aggregated documents
        },
        bestScore: {
          $max: "$score"
        }
      }
    },
    {
      $sort: {
        bestScore: -1
      }
    }
  ]
);
