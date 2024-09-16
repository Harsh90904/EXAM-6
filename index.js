const express = require('express');
const dbcontent = require("./config/db");
const userRouter = require("./routers/User.router")
const cors = require("cors");
const taskRoute = require('./routers/task.router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ msg: "start" })
})
app.use("/", userRouter)
app.use("/" , taskRoute)
app.listen(8520, () => {
    console.log("listening  on port 8090");
    dbcontent()
})
