use census_details;

/* one-to-many relationship can be implemented using two approaches, 
 1. Embedded Documents
 2. Reference ids
*/
/*
  -- Embedded documents approach is used when relational data is fetched together than separate collections.

  -- Reference ids approach is used when two related collections are required separately than together most of the time.
*/

// one-to-many relationship with reference ids
db.cities.insertOne(
  {
    _id: ObjectId('london_eng'),
    name: 'London',
    country: 'ENGLAND'
  }
);

db.citizen.insertMany(
  {
    name: 'Steven Gerrad',
    age: '34',
    city_id: ObjectId('london_eng'),
  }
);

// Here in this example it is most likely that cities and citizens details will be fetched separately, hence reference ids approach is used.
