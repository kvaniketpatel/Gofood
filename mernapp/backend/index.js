const express = require("express");
const mongodb = require("./db");


const app = express();
const port = 3000;

mongodb().catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//middlewares
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","https://thisisafoodapp.onrender.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://gofood-beta.vercel.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.options('*', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).send();
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(express.json());
app.use('/api', require('./routes/CreateUser'))
app.use('/api', require('./routes/DisplayData'))
app.use('/api', require('./routes/OrderData'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
