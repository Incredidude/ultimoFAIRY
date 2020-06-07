const controller = {};

controller.list = (req, res) => {
    res.render("FAQ.html", {
        title: "FAQ Page"
    });
};

module.exports = controller;