require('dotenv').config();
const server = require('./api/server.js');

/* heroku app:  https://gregc.herokuapp.com/ */
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
