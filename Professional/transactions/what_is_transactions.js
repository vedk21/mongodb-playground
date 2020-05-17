/*
  Transactions in mongoDB are used to tell mongoDB that these set of instructions are atomic in nature and if anything fails then recover the database to the state before the transaction.

  For this to work we need to have support for replica set which was introduced in mongoDB v4.0+
  
  With the transactions, the complete operation either succeeds as a whole or fails as whole. There is no inconsistent state in our DB.
*/
