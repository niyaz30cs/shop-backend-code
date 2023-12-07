const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

const url="mongodb+srv://niyaz30cs:Niyaz786@cluster0.kxsn674.mongodb.net/ecommerce?retryWrites=true&w=majority";

const connection = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Connection Established !!!!");
    }
    catch(err){
        console.log(err,"Some Error Creating Connection !!!!");
    }
}

module.exports = connection;