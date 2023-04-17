const express = require('express');
const router = express.Router();

const { isProduction }= require('../../config/keys');

if (!isProduction){
    router.get("/restore", (req,res) =>{
        const csrfToken = req.csrfToken();
        res.status(200).json({
            'CSRF-Token': csrfToken
        });
    });
};

// router.get('/', function(req, res, next) {
//   res.json({
//     message: "GET /api/csrf"
//   });
// });



module.exports = router;
