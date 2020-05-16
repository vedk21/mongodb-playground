// By default there are no users created in mongoDB server
// we need start mongod server with --auth flag

// $: mongod -f <path_to_config_file> --auth

// To create first user, it has to be the special user who is an admin to all database in system
use admin;

db.createUser(
  {
    user: 'vedk21',
    pwd: 'ved123',
    roles: ['userAdminAnyDatabase'] // special role which grants access to any database admin role
  }
);

// we can authenticate by 2 ways given
db.auth('vedk21', 'ved123');
// OR while connecting with mongo shell
$: mongo -u vedk21 -p ved123 --authenticationDatabase admin

// logout with a user
db.logout();
