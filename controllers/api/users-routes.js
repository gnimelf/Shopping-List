const router = require("express").Router()
const { User } = require("../../models")


// User login
router.post("/login", async (req, res) => {
    try {
        // Find the user
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        // check email
        if (!dbUserData) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!"
            })
            console.log('email passed')
            return
        }

        // check password
        const validPass = dbUserData.checkPassword(req.body.pass)

        if (!validPass) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!"
            })
            console.log('password passed')
            return
        }

        // Set session
        req.session.loggedIn = true
        req.session.userId = dbUserData.id
    

        req.session.save(() => {
            res.status(200).json({ message: "You are now logged in!" });
        });

    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

router.use("/logout", (req, res) => {
    if (req.session.loggedIn){
       req.session.destroy(() => {
        res.send("You're logged out!").status(200).end()
    }) 
    } else {
        res.status(404).end()
    }
    
})

router.post("/signup", async (req, res) => {
    try {
        
        // Create account
        const newUser = await User.create({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        })

        // Set session
        req.session.loggedIn = true
        req.session.userId = newUser
        
    } catch (err) {
        
    //     const errorList = {}
    //    err.errors.map( e => {
    //     errorList[e.path] = e.message
    //    })
    //     res.json(errorList).status(400)
    }
})

module.exports = router