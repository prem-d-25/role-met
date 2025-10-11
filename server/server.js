import express from "express";
import cors from "cors";
import mongConnect from './utility/connectDb.js';

const app = express();
const PORT = 5000;
mongConnect();

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Connected With Rolemet");
});

app.listen(PORT, ()=>{
    console.log(`Connected with ${PORT}`)
})