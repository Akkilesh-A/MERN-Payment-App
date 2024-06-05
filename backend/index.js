// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index")
const jwt = require("jsonwebtoken")
const jwtSecret = require("./config")

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api/v1",rootRouter)

app.listen(3000,()=>{
    console.log(`CORS-Enabled server successfully running in port 3000 with jstSecret as ${jwtSecret.JWT_SECRET}`);
})

