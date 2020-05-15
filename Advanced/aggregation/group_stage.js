use contactDetails;

// In aggregation pipeline we can use $group wot group documents on the basis of certain fields
db.contacts.aggregate(
  [
    {
      $match: {
        gender: 'female' // we can use any filter condition here, which we can use in an find query
      }
    },
    {
      $group: {
        _id: { // it defines the id on which we will group the documents
          state: "$location.state" // we can group on multiple fields
          // '$' has to be used with the field, representing the document field
        },
        totalPeople: {
          $sum: 1 // we can use various accumulation operators here
          // 1 means we want to add 1 to the total sum for every grouped document
        }
      }
    }
  ]
);

// we can also sort the documents using $sort stage
db.contacts.aggregate(
  [
    {
      $match: {
        gender: 'female' // we can use any filter condition here, which we can use in an find query
      }
    },
    {
      $group: {
        _id: { // it defines the id on which we will group the documents
          state: "$location.state" // we can group on multiple fields
          // '$' has to be used with the field, representing the document field
        },
        totalPeople: {
          $sum: 1 // we can use various accumulation operators here
          // 1 means we want to add 1 to the total sum for every grouped document
        }
      }
    },
    {
      $sort: {
        totalPeople: -1
      }
    }
  ]
);
