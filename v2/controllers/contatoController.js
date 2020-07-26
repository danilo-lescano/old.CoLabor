const ControllerBase = require("./_ControllerBase");

const controller = new ControllerBase("get", (req, res) => {
    res.render("contato");
})

module.exports = [
    controller
];