/*
  MongoDB supports horizontal scaling in the form of data sharding. In this case, mongo client will communicate with mongos router, and then this router will route the request to the appropriate shard.
  This mechanism uses a shard key concept. Every document in this system should have a shard key so that mongo router service can decide which shard can process this query. If no shard key is found in document then router service will broadcast the request to all shards and then shards will communicate the data or no-data response back to router service.
*/
// https://docs.mongodb.com/manual/sharding/