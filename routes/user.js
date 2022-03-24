
const { Router } = require('express');
const { usersGet, 
        usersPost, 
        usersPut, 
        usersDelete, 
        usersPatch } = require('../controllers/user.controller');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.patch('/', usersPatch);

router.put('/', usersPut);

router.delete('/', usersDelete);

module.exports = router;