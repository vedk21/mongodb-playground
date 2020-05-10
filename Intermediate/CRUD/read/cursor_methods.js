use netflix;

// The find method in mongoDB returns a cursor which is pointing to the documents filtered out by find query.
// There are various different methods you can execute on cursor to fetch documents.

// count() - returns count of total number of documents filtered
db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  }
).count();

// hasNext() - it return a boolean representing the end of documents list
const seriesCursor = db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  }
);

seriesCursor.hasNext();

// next() - returns the next document if present in the filtered list, return error if no document is present next.
const seriesCursor = db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  }
);

seriesCursor.next();

// sort() - returns cursor pointing to sorted documents according to given sort parameters
db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  }
).sort(
  {
    "rating.average": 1,
    runtime: -1
  }
);

// NOTE: 1 is ASC and -1 is DESC

// skip() - this skips the given number of documents
// limit() - it limits the number of documents to be fetched
db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  }
).sort(
  {
    "rating.average": 1,
    runtime: -1
  }
).skip(30).limit(10);

// NOTE: On cursor methods order doesn't matter, whether we sort first or last, it will always sort first and then skip it and then limit it.
