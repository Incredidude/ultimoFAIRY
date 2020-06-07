const controller = {};

controller.list = (req, res) => {

    res.render("register.html", {
        title: "Registro"
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    const data_query = [
        data.nombre,
        data.apellidos,
        data.usuario,
        data.correoElectronico,
        data.contraseña,
        data.cId,
        data.numeroTelefonico,
        data.numeroCasa,
        data.codigoPostal,
        data.calle,
        data.ciudad,
        data.estado,
        data.pais
    ]
    console.log(data_query);
    req.getConnection((err, conn) => {
        var query = conn.query('CALL registro(?)', [data_query], (err, contact) => {
            console.log(query.sql);
            if (err) {
                res.json(err);
            }
            res.redirect('/checkout.html');
        });
    });
};
module.exports = controller;