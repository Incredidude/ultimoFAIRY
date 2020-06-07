const controller = {};

controller.list = (req, res) => {
    res.render("galeria.html", {
        title: "Galeria Page"
    });
};

module.exports = controller;