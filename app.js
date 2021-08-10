const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req,res)=>{
  res.send('<h1>My Node App</h1>');
});
app.listen(5000, () =>{
    console.log('App is listening on port 5000');
})