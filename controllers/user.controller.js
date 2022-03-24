const {response} = require('express');

const usersGet = (req = request, res = response) => {

    const {q, name, apikey}=req.query;

    res.json({
        msg: 'get API',
        q,
        name,
        apikey, 
    });
}
const usersPost = (req, res = response) => {

    const body = req.body;

    res.json({

        msg: 'post API',
        body

    });

    console.log(`This is ${body.name} and I am ${body.age} y.o.` );
}
const usersPut = (req, res = response) => {

    res.json({
        msg: 'put API',
    });
}

const usersPatch = (req, res = response) => {

    res.json({
        msg: 'patch API',
    });
}

const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API',
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPatch,
    usersPut,
    usersDelete,
}