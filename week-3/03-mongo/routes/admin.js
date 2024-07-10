const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db/index");

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    //if already exist then send
    // Admin.findOne({ username: username,password:password }).then(()=>{
    //     return res.json({ msg: "User exist" });
    // });

    Admin.create({
        // username: username,
        // password: password,
        //if variable and key is same we can directly write
        username,
        password
      }).then(()=>{
        res.send({ msg: "admin created" });
      }).catch(()=>{
        res.send({ msg: "There is an error" });
      });
      
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    //we have to use ZOD
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price
    
    const newCourse  = await Course.create({
      title,
      description,
      imageLink,
      price
    })

    console.log(newCourse)

    res.json({
      message: 'Course created successfully', 
      courseId: newCourse.id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses = await Course.find({})

    res.json({
      courses: allCourses
    })
});

//put handler
//to update price of a course

module.exports = router;