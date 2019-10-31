require('dotenv').config();
const server = require('./api/server.js');

/* heroku app:  https://gregc.herokuapp.com/ will add a port for us. Heroku is the env */
const port = process.env.PORT || 8000;
console.log(port);
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
