use dummy;

// We can do all sorts of mathematical operations on these numeric types
db.numberLogs.insertOne(
  {
    age: NumberInt('23') // save 32 bit integer
  }
);

db.numberLogs.updateOne(
  {
    age: NumberInt('23')
  },
  {
    $set: {
      $inc: {
        age: NumberInt('1')
      }
    }
  }
);

// same is true for int64
db.numberLogs.insertOne(
  {
    revenue: NumberLong('3432127865') // save 64 bit integer
  }
);

db.numberLogs.updateOne(
  {
    revenue: NumberLong('3432127865')
  },
  {
    $set: {
      $inc: {
        age: NumberLong('1') // if we don't do it using NumberLong('1') then it will automatically get converted to double 64bit
      }
    }
  }
);
