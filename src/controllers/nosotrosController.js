const controller = {};

controller.list = (req, res) => {
    res.render("nosotros.html", {
        title: "Nosotros Page"
    });
};

module.exports = controller;