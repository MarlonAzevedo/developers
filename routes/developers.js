const express = require('express');
const router = express.Router();
const dev = require('../function/developersFunc.js');

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//Retorna todos os desenvolvedores
router.get('/developers',async function(req, res, next){ 
    resposta = await dev.list() ;
    res.status(200).send(resposta);
});
//Retorna os desenvolvedores de acordo com o termo passado via querystring e paginação
router.get('/developers/filter=:filter',async function(req, res, next){     
    let filter = req.params.filter;
    var body = req.body; 
    resposta = await dev.filter(filter,body) ;
    res.status(200).send(resposta);
});
//Retorna os dados de um desenvolvedor
router.get('/developers/:id',async function(req, res, next){ 
    let id = req.params.id;
    resposta = await dev.get(id);
    res.status(200).send(resposta);
});
//Adiciona um novo desenvolvedor
router.post('/developers',async function(req, res, next){ 
    var body = req.body; 
    let name = body.name
    let sex = body.sex
    let age = body.age
    let hobby = body.hobby
    let birthdate = body.birthdate
    if(name,sex,age,hobby,birthdate){
        resposta = await dev.insert(name,sex,age,hobby,birthdate) ;
        res.status(200).send("inserted id : "+resposta);
    }else{
        res.status(400).send('missing parameters');
    }
});
//Atualiza os dados de um desenvolvedor
router.put('/developers/:id',async function(req, res, next){ 
    let id = req.params.id
    var body = req.body; 
    let name = body.name
    let sex = body.sex
    let age = body.age
    let hobby = body.hobby
    let birthdate = body.birthdate
    if(name,sex,age,hobby,birthdate){
        resposta = await dev.update(id,name,sex,age,hobby,birthdate) ;
        if (resposta == "true") {
            res.status(200).send("update ok");
        } else{
            res.status(200).send("not fould");
        } 
    }else{
        res.status(400).send('missing parameters');
    };
});
//Apaga o registro de um desenvolvedor
router.delete('/developers/:id',async function(req, res, next){ 
    let id = req.params.id
    resposta = await dev.del(id);
    if (resposta == "true") {
        res.status(200).send("delete id");
    } else{
        res.status(200).send("not fould");
    }    
});

module.exports = router;