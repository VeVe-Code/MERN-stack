let express = require('express');
let app = express();
require('dotenv').config()
let morgan = require('morgan');

app.use(morgan('dev'))

app.get('/',(req,res) => {
    return res.json({hello: 'World'});

})

app.listen(process.env.PORT,() => {
    console.log('Server is running on port-'+ process.env.PORT);
})