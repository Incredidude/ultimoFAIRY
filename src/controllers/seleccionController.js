const controller = {};

controller.list = (req, res) => {
    res.render("seleccion.html", {
        title: "Selection Page"
    });
};

module.exports = controller;