use contactDetails;

// We create index for a field inside document by using createIndex() method
db.contacts.createIndex(
  {
    "dob.age": 1 // 1 -> indexes will be ordered ASC, -1 -> DESC order
  }
);

// NOTE: Indexes are nothing but list of keys, each key saving information about field value and its document address in the collection. Indexes are ordered so that read operations are optimized.

// IMP NOTE: Indexes will speed up the query execution only if the requested filter returns certain portion of the documents collection and not almost all documents.

// Example1: If Query1 returns 30% documents from collection then indexes will improve the find query performance.
// Example2: If Query1 returns 95% documents from collection then indexes will reduce the find query performance. Because this time 2 stage approach is taken, 1st go through all indexes and then through 80% documents. Instead without indexes we only have to go through documents once.

// we can also drop indexes on a collection
db.contacts.dropIndex(
  {
    "dob.age": 1
  }
);

// we can also list down all the indexes
db.contacts.getIndexes();

// NOTE: There is already a default index created by mongoDB on every collection for _id field.
