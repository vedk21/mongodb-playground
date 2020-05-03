use shop;

// There are different validation actions
/*
  1. error - It will throw an error, if validation fails (default action is error)
  2. warn - It will log a warning, but will insert or update the document
*/

// To change the configuration options which are already set for a collection we use 'runCommand'
db.runCommand(
  {
    collMod: 'books',
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
    },
    validationAction: 'warn' // default is 'error'
  }
);
