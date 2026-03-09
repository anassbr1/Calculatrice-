const app = require('./index');
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Calculator running on http://localhost:${PORT}`);
});

module.exports = server;