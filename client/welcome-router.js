const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Adela's db2. Welcome!"
    })
})

module.exports=router;