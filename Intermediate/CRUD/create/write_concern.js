use champions_league;

// MongoDB storage manager (WiredTiger) is responsible for writing documents into memory and as well as storage files on disk.
// The write operations works in a sequence such that, it acknowledges the write operation and then write that operation into the journal file (ToDo file) if configured.

// Journal file - It's the file which can be used by storage manager to save documents into file storage later.
// acknowledgement - MongoDB server by default acknowledges the write operation and return user the response. In background storage manager takes the responsibility to write the documents in memory as well as in file storage.

db.teams.insertOne(
  {
    team_name: 'EVERTON',
    country: 'ENGLAND'
  },
  {
    writeConcern: {
      w: 1, // default
      j: false // default
    }
  }
);

// we can set w to zero (0), in this case mongoDB will quickly return the response back to client without acknowledging the write operation. In this case operation might fail but client will not be informed. Use this when every data write is not important, but the quick response is important.

db.teams.insertOne(
  {
    team_name: 'EVERTON',
    country: 'ENGLAND'
  },
  {
    writeConcern: {
      w: 0
    }
  }
);

// we can also j (journal) to true, in this case mongoDB storage manager will write the write operation details to journal file. This configuration can slow down the write operation response time. Use this when write operations are important than the quick response time.

db.teams.insertOne(
  {
    team_name: 'EVERTON',
    country: 'ENGLAND'
  },
  {
    writeConcern: {
      w: 1, // default
      j: true
    }
  }
);

// we can also add wtimeout key, which provides the timeout in case writing journal file might take time. Use this when few write operations are taking more time than others for improved performance. If we keep the wtimeout very low number, chances are that it will fail more often than not.

db.teams.insertOne(
  {
    team_name: 'EVERTON',
    country: 'ENGLAND'
  },
  {
    writeConcern: {
      w: 1, // default
      j: true,
      wtimeout: 200
    }
  }
);
