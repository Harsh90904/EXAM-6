
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


module.exports = { getUserTasks };
