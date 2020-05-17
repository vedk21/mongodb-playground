/*
  In mongoDB server architecture, server is always attached to a primary node, now this cluster DB Admin can also create secondary nodes, hence this cluster architecture is called replica sets.
  Now during write operation, mongo client will communicate directly with mongo server, in turn mongo server will communicate with primary node it is attached with. It is primary nodes job to do write operations, but asynchronously the data will written to secondary nodes as well.
  Hence during read operations, even if the primary node is down, secondary node will be active to perform read operations. Even if configured, secondary nodes can do write operations if primary node is in-active. This makes the system fault tolerant.
*/
// https://docs.mongodb.com/manual/replication/