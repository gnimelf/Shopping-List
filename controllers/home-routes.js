const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        // res.render("home")
        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})


// Display login page
router.get("/login", (req, res) => {
    try {
        res.render('login')       
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})


router.get("/lists", (req, res) => {
    if (req.session.loggedIn == true) {
        try {
            // res.render("lists")
            res.send("This is the list page")
        } catch (err) {
            console.log(err)
            res.status(500)
        }
    } else {
        res.redirect("/login")
    }
})


router.get("/signup", (req, res) => {
    try {
        res.send("This is the sign up page")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

module.exports = router;
