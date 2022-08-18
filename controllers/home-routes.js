const router = require("express").Router()

router.get("/", (req, res) => {
    try {
        res.render("home")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
});

router.get("/login", (req, res) => {
    try {
        res.render("login")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
});

router.get("/lists", (req, res) => {
    if (req.session.loggedIn === true) {
        try {
            res.render("lists")
        } catch (err) {
            console.log(err)
            res.status(500)
        }
    } else {
        res.render("login")
    }
});

module.exports = router
