// We can update user with updateUser() method
// we can use this to update user's password or roles
// For that we have to switch to admin user

$: mongo -u vedk21 -p ved123 --authenticationDatabase admin

use admin;

db.updateUser(
  'appUser', // name of the user to update
  {
    roles: [ // this is going to replace the original roles and not update them
      'readWrite', // original roles
      {
        role: 'readWrite', // new roles
        db: 'blogs'
      }
    ]
  }
);

db.logout();

db.auth('appUser', 'app123');

use blogs;

db.posts.insertOne(
  {
    text: 'Yeah worked!!!'
  }
);
