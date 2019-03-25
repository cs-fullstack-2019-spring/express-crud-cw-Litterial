var express = require('express');
var router = express.Router();
var crimeCollection=require('../models/crimesModel');   //requires model from crimesModel


router.get('/findCategory/:code/:name/:date',(req,res)=>
{
    crimeCollection.findOneAndUpdate(  //finds a crime listed by a specific code and name under category
        {category:
                {code:req.params.code, name:req.params.name,}
        },

        {date:req.params.date},(err,results)=>   //changes date
        {
            if (err) res.send(err);  // if there are errors, list errors


        });
});

module.exports = router;
