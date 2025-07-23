let express = require('express');
let app = express();
require('dotenv').config()
let morgan = require('morgan');
let recipesRoutes = require('./routes/recipes')
app.use(morgan('dev'))
let mongoose = require('mongoose')
let mongoURL = "mongodb+srv://kaungzinthu:test1234@mern-cluster0.tnbkq9r.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster0"


mongoose.connect(mongoURL).then(()=>{
    console.log('connect to db')
    app.listen(process.env.PORT,() => {
    console.log('Server is running on port-'+ process.env.PORT);
})
})


app.get('/',(req,res) => {
    return res.json({hello: 'World'});

})

app.use('/api/recipes',recipesRoutes)


