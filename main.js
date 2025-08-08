const express = require('express');
const app = express();
const db = require('./config/database');

//route
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Program Ratings Sedang Berjalan')
})
app.use('/api', require("./routes/rating"));


db.sync({force: false}).then(() => console.log("succes")).catch((err) => console.log(err.massage));
app.listen(process.env.PORT || 5000);
