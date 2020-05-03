use shop;

// There are different validation levels
/*
  1. strict - On both insert and update the validation will apply.
  2. moderate - Validation only applies your rules to new documents and existing valid documents. Existing invalid documents are not affected.
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
    validationLevel: 'moderate' // default is 'strict'
  }
);

// NOTE: we can also set validationLevel to 'off', this will completely ignore validation rules
