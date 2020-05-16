// We can secure the connection between mongoDB client and mongoDB server with SSL/TLS.
// for that we create openSSL certificate
// steps can be found in here
// https://docs.mongodb.com/manual/tutorial/configure-ssl/
$: openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365

// then we start the server with ssl enabled mode
$: mongod --sslMode requireSSL --sslPEMKeyFile mongodb.pem

// Now to login with ssl enabled client
$: mongo --ssl --sslCAFile mongodb.pem --host localhost
