
const User = require('../models/user'); 

const getUserTasks = async (req, res) => {
    
        let userId = req.params.userId;
        let user = await User.findById(userId);
        console.log(user);
        
       
        if (user.type === "teacher") {
            let allStudentTasks = await User.find({type:"student"}); 
            res.send(allStudentTasks);
        } 
      
        else if (user.type === "student") {
            let tasks = await User.find({ userId: userId });
            res.send(tasks);
        }
        else{
            res.send("maja ave")
        }
    
};
const filter = async (req, res) => {
    const {age} = req.qurey;

    if(age === 0-10){
        let tasks = await User.find({age: {$lte: 10}});
        res.send(tasks);
    }
    else if(age === 0-20){
        let tasks = await User.find({age: {$lte: 20}});
        res.send(tasks);
    }
    else if(age === 0-30){
        let tasks = await User.find({age: {$lte: 30}});
        res.send(tasks);
    }
    else if(age === 0-40){
        let tasks = await User.find({age: {$lte: 40}});
        res.send(tasks);
    }
};


module.exports = { getUserTasks , filter };
