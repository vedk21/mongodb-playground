use dummy;

// The double 64 bit floating point number stores a number with less precision, which can be problematic if we are doing some mathematical operations on it
db.products.insertOne(
  {
    original_price: 102.90,
    offer_price: 99.99
  }
);

db.products.aggregate(
  [
    {
      $project: {
        $subtract: ["$original_price", "$offer_price"]
      }
    }
  ]
);

// You will see some precision loss in this operation above, it will not be exactly 2.91
// For precision we should use  NumberDecimal('3432.334') for high precision
db.products.insertOne(
  {
    original_price: NumberDecimal('102.90'),
    offer_price: NumberDecimal('99.99')
  }
);

db.products.aggregate(
  [
    {
      $project: {
        $subtract: ["$original_price", "$offer_price"] // this will exactly give us 2.91
      }
    }
  ]
);
