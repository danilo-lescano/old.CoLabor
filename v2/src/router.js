const express = require("express");
const router = express.Router();

const controllers = [
    "contato",
    "home",
    "sobre",
];

for (let i = 0; i < controllers.length; i++) {
    let name = controllers[i];
    let controller = require("../controllers/" + name + "Controller");
    controller.forEach(el => {
        if(el.type == "get")
            router.get("/"+name, el.func);
        else if(el.type == "post")
            router.post("/"+name, el.func);
        
        if(name == "home")
            router.get("/", el.func);
    });
}
router.get("/blog/1", (req, res) => {
    res.render("holder1");
});
router.get("/blog/2", (req, res) => {
    res.render("holder2");
});

module.exports = router;