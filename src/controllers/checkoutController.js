const controller = {};

controller.list = (req, res) => {
    res.render("checkout.html", {
        title: "Checkout"
    });
};

module.exports = controller;