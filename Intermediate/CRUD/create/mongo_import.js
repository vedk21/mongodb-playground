// We can import a external json file into the mongodb collection.
// mongoimport <FILE_NAME.json> -d <DATABASE_NAME> -c <COLLECTION_NAME> --jsonArray --drop

// json file can contain either document or array of documents
// we have specify the database and collection name
// --jsonArray is used when file has array of documents and not single document
// --drop is used when we need to drop the collection before adding these document/s, otherwise it will append these document/s into existing documents of collection.

