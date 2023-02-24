const server = require('./server');
const PORT = process.env.PORT || 9091;
const app = server();

app.listen(PORT, () => {
  console.log(`Server started. Port ${PORT}`);
});