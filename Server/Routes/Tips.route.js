const express = require('express');
const {getTips, postTips, deleteTips, updateTips} = require('../Controllers/tips.controller.js')
const router = express.Router();

router.route("/").get(getTips).post(postTips)
router.route("/:id").delete(deleteTips).put(updateTips)

module.exports = router