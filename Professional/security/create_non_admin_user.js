// For this we create a user for a database, assign roles to the user which will be indirectly confined to that database only
$: mongo -u vedk21 -p ved123 --authenticationDatabase admin

use shop;

db.createUser(
  {
    user: 'appUser',
    pwd: 'app123',
    roles: ['readWrite']
  }
);

// now we are still signed in with admin user
// we either logout and switch to new user
db.logout();
db.auth('appUser', 'app123');
// OR we exit the session with ctrl+c and then open mongo shell with logging new user
$: mongo -u appUser -p app123 --authenticationDatabase shop

// Now we can use shop db and do actions on our database shop
use shop;

db.products.insertOne(
  {
    title: 'A t-shirt',
    price: 99.99
  }
);

db.products.findOne();

// NOTE: this user only has access to database on which it was created, also only the access which we assigned as a role

// We can get users details with getUser() method
db.getUser('appUser');
