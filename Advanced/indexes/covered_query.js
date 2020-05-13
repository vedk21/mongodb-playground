use netflix;

// Covered queries are queries where query's projection data is fully covered by an index.
db.tv_series.createIndex(
  {
    runtime: 1
  }
);

db.tv_series.find(
  {
    runtime: 60
  },
  {
    _id: 0,
    runtime: 1
  }
);

// Here we only project runtime whose information is already with indexes, hence it directly returns the document with that field, it doesn't examine the documents collection for that unnecessarily.
