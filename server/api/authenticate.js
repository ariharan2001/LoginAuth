const router = require("express").Router();
const jwt = require('jsonwebtoken');

router.post("/",async (req,res) => {
    try{
        const userToken = req.body.token;
        jwt.verify(userToken,process.env.JWTPRIVATEKEY);
        res.status(200).send({data:true, message:"You are autherized..."});
    }
    catch(error){
        res.status(400).send({data:false,message:"You are not autherized..."});
    }
});

module.exports = router;