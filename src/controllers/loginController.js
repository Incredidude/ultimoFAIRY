const controller = {};

controller.list = (req, res) => {
    res.render("login.html", {
        title: "Login Page"
    });
};

module.exports = controller;