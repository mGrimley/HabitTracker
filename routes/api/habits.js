const express = require('express')
const router = express.Router()
const habitsCtrl = require('../../controllers/api/habits')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, habitsCtrl.index)
router.post('/', ensureLoggedIn, habitsCtrl.create)
router.delete('/:id', ensureLoggedIn, habitsCtrl.delete)
router.put('/:id', ensureLoggedIn, habitsCtrl.update)

module.exports = router