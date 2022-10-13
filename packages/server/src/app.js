import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { API_URL, DB_URL } from './configs/index.js';
import routes from './routes/index.js';

// import * as path from 'path'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_URL, routes);

// **Some imports .... **


// ................ 
// Other Routes and Code...
// ...............
// (Add below code after all other routes)
//Serve Static Assets in production 
//set static folder

// app.use(express.static('/client/build'));
// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));});


export default app;