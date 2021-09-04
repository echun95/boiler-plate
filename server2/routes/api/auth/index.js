const router = require('express').Router()
const controller = require('./controller')

router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.post('/auth', controller.auth)
router.get('/hello', controller.hello)
module.exports = router