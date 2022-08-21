const router = require("express").Router();
const { User, List } = require("../models")

// home route
router.get("/", (req, res) => {
    try {
        // res.render("home")
        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})


// Login page route
router.get("/login", (req, res) => {
    try {
        res.render('login')       
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})

// User lists route
router.get("/lists", async (req, res) => {
    if (req.session.loggedIn == true) {
        try {
            const dbListData = await List.findAll({
                where: {
                    user_id: req.session.userId
                }
            })
            res.json(dbListData);
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    } else {
        res.redirect("/login")
    }
})

// User signup route
router.get("/signup", (req, res) => {
    try {
        res.send("This is the sign up page")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

module.exports = router;
