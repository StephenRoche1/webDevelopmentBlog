const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app =express();
const PORT = process.env.PORT || 3003;
app.use(cors());
app.use(express.json());
var MONGODBURL ='mongodb://localhost:27017/blogDatabase';
mongoose.connect(process.env.MONGODBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
mongoose.connection.on('connected', ()=> {
    console.log('connected to the mongodb database');
});
app.get('/',(req,res)=> {
    res.send("Hi Bloggy blogs");
});
app.listen(PORT, () => {
    console.log("Server is running");
})
const QuestionRoutes = require('./routes/api/QuestionRoutes');
app.use('/api/QuestionRoutes', QuestionRoutes);
