use dummy;

// There are 4 types of number types available in mongoDB
/*
  1. Int32
  2. Int64
  3. Double (64 bit) (Less precision)
  4. Decimal (128 bit) (High precision)
*/
// By default mongo shell uses 33 as double, means 33 will be stored as 33.0000

// Creating int32 in mongo shell
db.numberLogs.insertOne(
  {
    age: NumberInt('23') // save 32 bit integer
  }
);

// Creating int64 in mongo shell
db.numberLogs.insertOne(
  {
    revenue: NumberLong('3432127865') // save 64 bit integer
  }
);

// NOTE: Always to use strings inside these function as it's easy for mongo shell to convert these string to numbers.
