const express = require('express');
const connection = require("./Config/db")
const userRouter = require('./Routers/userRouter');
const cors = require('cors')
const app = express();
const port = 1350;

app.use(express.json())

app.use(cors({
    origin: "*"
}));

app.use('/api/user', userRouter)


app.listen(port, async()=>{
    try
    {
        await connection();
        console.log(`Server is running on Port No-${port}`);
    }
    catch(err)
    {
        console.log("Some Error on Port No", err);
    }
});