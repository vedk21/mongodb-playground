use contactDetails;

// In aggregation pipeline we can merge arrays of different document into one using combination of $unwind, $group and $push
db.friends.aggregate(
  [
    {
      $unwind: "$hobbies"
    },
    {
      $group: {
        _id: {
          age: "$age"
        },
        specialHobbies: {
          $push: "$hobbies"
        }
      }
    }
  ]
);

// NOTE: $unwind - it unwinds the array into multiple documents with single array value
/*
  [{
    name: 'Rax',
    skills: [ 'Gaming', 'Rock Climbing' ]
  }]
  after unwind becomes
  [
    {
      name: 'Rax',
      skills: 'Gaming'
    },
    {
      name: 'Rax',
      skills: 'Rock Climbing'
    }
  ]
*/

// In order to avoid pushing duplicates into array we should use $addToSet
db.friends.aggregate(
  [
    {
      $unwind: "$hobbies"
    },
    {
      $group: {
        _id: {
          age: "$age"
        },
        specialHobbies: {
          $addToSet: "$hobbies"
        }
      }
    }
  ]
);

// Get size of the array
db.friends.aggregate(
  [
    {
      $unwind: "$hobbies"
    },
    {
      $group: {
        _id: {
          age: "$age"
        },
        specialHobbies: {
          $addToSet: "$hobbies"
        }
      }
    },
    {
      $project: {
        _id: 0,
        age: 1,
        specialHobbies: 1,
        totalHobbies: {
          $size: "$specialHobbies"
        }
      }
    }
  ]
);
