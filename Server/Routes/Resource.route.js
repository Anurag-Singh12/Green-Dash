const express = require('express');
const {getResources, postResources, updateResource, deleteResource} = require('../Controllers/resource.controller.js')
const router = express.Router();

router.route("/").get(getResources).post(postResources)
router.route("/:id").put(updateResource).delete(deleteResource)

module.exports = router