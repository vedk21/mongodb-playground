use champions_league;

// MongoDB supports different data types such as
/*
  1. Text (any text, it should not be grater than the size of document (16MB))
  2. Boolean (true/false)
  3. NumberInt (int32)
  4. NumberLong (int64)
  5. NumberDecimal (high precision double) (128 bit decimal)
  6. Double (precision is not imp here) (64bit decimal)
  7. ObjectId (custom data type in mongo to specify unique document id) 96bits or 12 bytes
  8. ISODate (date type in ISO format)
  9. Timestamp (unix timestamp)
  10. Embedded document type
  11. Array type
*/

db.teams.insertOne(
  {
    team_name: 'BARCELONA', // text
    is_current_champions: true, // boolean
    won_the_competition: NumberInt(5), // 32 bit integer
    number_of_minutes_played: 12345678901234567, // 64 bit long integer
    goals_scored_per_match: NumberDecimal(2.68641245629), // 128 bit floating decimal with precision
    average_games_played_in_year: 47.217, // 64 bit double (no precision)
    _id: ObjectId('abcd2331defewg564'), // 12bytes unique id made of (timestamp + random number + increasing order random number)
    founders_date: new Date(), // javascript ISO date
    created_at: new Timestamp(),
    information: {
      nickname: 'blaugrana',
      average_number_passes_per_game: 98.2345
    },
    competitions: [
      'Champions League',
      'La Liga',
      'Copa del Rey'
    ]
  }
);

// NOTE: By default mongo shell consider any number as 64 bit double, if not explicitly defined as other data type
