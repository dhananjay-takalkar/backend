const router = require('express').Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/users', getUsers);
