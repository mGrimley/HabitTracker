const express = require('express')
const router = express.Router()
const habitsCtrl = require('../../controllers/api/habits')

router.get('/', habitsCtrl.index)
router.post('/', habitsCtrl.create)
router.delete('/:id', habitsCtrl.delete)
router.put('/:id', habitsCtrl.update)

module.exports = router