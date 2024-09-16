const { Router } = require("express")
const { signup, login} = require("../controllers/User.controllers")
const userRouter = Router()
userRouter.post("/signup",signup)
userRouter.post("/login",login)
module.exports =userRouter; 