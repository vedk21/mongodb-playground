// Use case: Transactions

use blogs;

db.users.insertMany(
  [
    {
      _id: 'rey123',
      name: 'Rey',
      age: 21
    },
    {
      _id: 'polly123',
      name: 'Polly',
      age: 24
    }
  ]
);

db.posts.insertMany(
  [
    {
      text: 'First new Post',
      userId: 'rey123'
    },
    {
      text: 'Second new Post',
      userId: 'rey123'
    },
    {
      text: 'At last new Post',
      userId: 'polly123'
    }
  ]
);

// Now if we want to delete 'rey123' user all of its posts should also be deleted.

// For transaction to work, we need a mongoDB session.
// Session is where we execute series of requests as a whole.
const session = db.getMongo().startSession();
// now we need to start transaction on a session
session.startTransaction();
// then get the collections access
const usersCollection = session.getDatabase('blogs').users;
const postsCollection = session.getDatabase('blogs').posts;
// Now we can create a todo list of requests we want to send to a transaction
// delete user request added to todo list
usersCollection.deleteOne(
  {
    _id: 'rey123'
  }
);
// delete posts request added to todo list
postsCollection.deleteMany(
  {
    userId: 'rey123'
  }
);
// the above requests doesn't execute the queries but saves as a todo in a transaction
// in order to execute the complete transaction we use commitTransaction
session.commitTransaction();
// OR in order to abort the transaction
session.abortTransaction();

// NOTE: Transaction has to be used carefully, because it is performance exhaustive approach that the normal query execution.
