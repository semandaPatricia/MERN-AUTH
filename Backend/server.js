const express = require ('express')
const app = express()
const cors =require('cors')
const mongoose = require ('mongoose')

const userRoutes = require('./routes/user.route');
//const user = require('./models/userModel.js')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//import authRoutes from './routes/auth.route.js';
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})
app.use(cors())

const PORT =  process.env.PORT || 8000;

connectDB()

/*middleware*/
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 


/*routes basic*/
app.get('/', (req, res) => {
    res.send('hello world ')

 })

 app.use('/api/user', userRoutes);
//app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });


/*port*/
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}!`);
  });