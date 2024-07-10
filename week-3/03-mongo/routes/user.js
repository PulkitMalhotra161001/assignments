const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User,Course} = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.body.username
    const password = req.body.password

    //if already exist then send
    // Admin.findOne({ username: username,password:password }).then(()=>{
    //     return res.json({ msg: "User exist" });
    // });

    User.create({
        // username: username,
        // password: password,
        //if variable and key is same we can directly write
        username,
        password
      }).then(()=>{
        res.send({ msg: "user created" });
      }).catch(()=>{
        res.send({ msg: "There is an error" });
      });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const allCourses = await Course.find({})

    res.json({
      courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    //courseId must be same as call courseId
    const courseId = req.params.courseId
    
    const username = req.headers.username

    //check if user already have the course ??
    //if wrong courseId should buy

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })

    res.json({
        msg:"Purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username

    //it find the first one / only one
    const userData = await User.findOne({
        username:username
    })

    //it find all query
    const courses = await Course.find({
        _id:{
            "$in":userData.purchasedCourses
        }
    })

    res.json({
        msg:courses
    })
});

module.exports = router