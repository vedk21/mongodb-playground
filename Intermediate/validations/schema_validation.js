use shop;

// Schema validation is used to validate the schema while inserting or updating the document into collection.
// There are different validation levels
/*
  1. strict - On both insert and update the validation will apply.
  2. moderate - On inserts its compulsory, but on updates only the documents added with proper validation will be compulsory.
*/

// There are different validation actions
/*
  1. error - It will throw an error, if validation fails (default action is error)
  2. warn - It will log a warning, but will insert or update the document
*/

db.createCollection(
  'books',
  {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'current_price', 'authors'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          current_price: {
            bsonType: 'decimal',
            description: 'must be a decimal and is required'
          },
          authors: {
            bsonType: 'array',
            description: 'must be an array and is required',
            items: [
              {
                bsonType: 'objectId',
                description: 'must be a objectId and is required'
              }
            ]
          },
          reviews: {
            bsonType: 'array',
            description: 'must be an array',
            items: [
              {
                bsonType: 'object',
                required: ['text', 'reviewer'],
                properties: {
                  text: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                  },
                  reviewer: {
                    bsonType: 'objectId',
                    description: 'must be a objectId and is required'
                  }
                }
              }
            ]
          }
        }
      }
    }
  }
);


// successful insert
db.books.insertMany(
  [
    {
      name: 'A Book 1',
      current_price: NumberDecimal('120.99'),
      authors: [
        ObjectId('5eaecc331d7c6c034fe3e7ab'),
        ObjectId('5eaecc331d7c6c034fe3e7aa'),
      ],
      reviews: [
        {
          reviewer: ObjectId('5ead2f251d7c6c034fe3e7a8'),
          text: 'This book is good'
        }
      ]
    },
    {
      name: 'A Book 2',
      current_price: NumberDecimal('140.99'),
      authors: [
        ObjectId('5eaecc331d7c6c034fe3e7aa')
      ]
    }
  ]
);

// invalid insert (text field is missing in reviews)
db.books.insertMany(
  [
    {
      name: 'A Book 1',
      current_price: NumberDecimal('120.99'),
      authors: [
        ObjectId('5eaecc331d7c6c034fe3e7ab'),
        ObjectId('5eaecc331d7c6c034fe3e7aa'),
      ],
      reviews: [
        {
          reviewer: ObjectId('5ead2f251d7c6c034fe3e7a8')
        }
      ]
    },
    {
      name: 'A Book 2',
      current_price: NumberDecimal('140.99'),
      authors: [
        ObjectId('5eaecc331d7c6c034fe3e7aa')
      ]
    }
  ]
);
