const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://smartshala31:password31@cluster0.hm7id.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

const adminRoutes = require('./routes/adminRoutes');



const port = 3001;

app.use(express.json());
app.use('/admin', adminRoutes);


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


console.log("Smartshala");

app.listen(port, (err)=>{
    console.log(`server is running on ${port}!`);
})