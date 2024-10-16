const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=> {
    return res.json({msg: "Hey I am nodejs in container"});
})

app.listen(PORT, ()=> console.log(`SERVER STARTED ON ${PORT}`));