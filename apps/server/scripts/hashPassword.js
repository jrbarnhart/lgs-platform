const bcrypt = require('bcrypt');

const password = process.argv[2]; // Get the password from command-line arguments

if (!password) {
  console.error('Please provide a password as an argument.');
  process.exit(1);
}

bcrypt
  .hash(password, 10)
  .then((hash) => {
    console.log(hash);
  })
  .catch((err) => {
    console.error('Error hashing password:', err);
    process.exit(1);
  });
