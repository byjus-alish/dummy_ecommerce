const express   = require('express')
const app       = express();
const products  = require('./routes/products')
const user      = require('./routes/user')
const login     = require('./routes/login') 
const notFound  = require('./middleware/notFound');
const connectDB = require('./db/connect')

const PORT = 3000;
const url  = "mongodb://127.0.0.1:27017/test";
app.use(express.static('./public'));
app.use(express.json());



app.use('/api/products', products);
app.use('/api/user',user)
app.use('/', login);
app.use(notFound)

const start = async()=>{
  try{
    await connectDB(url)
  }catch(error){
    console.log(error);
  }

  app.listen(3000,()=>{
    console.log(`server is listening on ${PORT}`);
  })

}

start();
