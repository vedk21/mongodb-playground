use support_portal;

/* one-to-many relationship can be implemented using two approaches, 
 1. Embedded Documents
 2. Reference ids
*/
/*
  -- Embedded documents approach is used when relational data is fetched together than separate collections.

  -- Reference ids approach is used when two related collections are required separately than together most of the time.
*/

// one-to-many relationship with embedded documents
db.queries.insertOne(
  {
    user: 'Philip Lahm',
    question: 'How to do that?',
    category: 'Login',
    answers: [
      {
        answer: 'Do that optional thing.',
        user: 'Manual Neur'
      },
      {
        answer: 'Ok will do that.',
        user: 'Philip Lahm'
      }
    ]
  }
);

// Here in this example it is most likely that questions will be fetched along with the answers, hence embedded document approach is used.
