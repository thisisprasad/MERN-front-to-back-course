const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc TEST route
// @access public
router.get('/', (req, res) => res.send('Posts router'));

module.exports = router;