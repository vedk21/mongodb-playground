use netflix;

// MongoDB decides a winning plan by running various plan strategies for limited number of documents, and then saves/caches the plan in memory for future use for that exact same query.
db.tv_series.createIndex(
  {
    runtime: 1
  }
);

db.tv_series.createIndex(
  {
    weight: 1,
    runtime: 1
  }
);

// query
db.tv_series.find(
  {
    runtime: 60,
    weight: 30
  }
);

// For this query mongoDB has two indexes available, it will decide by running both index plan for limited number of documents and then caches the wining plan and rejects other plans.

// NOTE: we can check the full stats with help of 'allPlansExecution' parameter for explain() method while running query.
// NOTE: cached winning plan has an expiry as well, it expires on following conditions
// 1. if db restarts
// 2. if threshold (1000 default) new documents are inserted
// 3. if index is removed and added again
// 4. if new indexes are added or removed
