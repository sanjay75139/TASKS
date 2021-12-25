const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const mongoose = require('mongoose')

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 5000;

mongoose.connect("mongodb+srv://Sanjay:Sanjay@2122@cluster0.kz6f2.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(res=>{
        console.log("DB Connected!")
}).then(res=>{
  app.listen(process.env.PORT || port,()=>{
    console.log("SERVER IS RUNNING SUCCESSFULLY")
  })
}).catch(err => {
  console.log(Error, err.message);
})

// const start = async () => {
//   try {
//     await connectDB("mongodb+srv://Sanjay:Sanjay@2122@cluster0.kz6f2.mongodb.net/test?retryWrites=true&w=majority");
//     app.listen(process.env.PORT || port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
