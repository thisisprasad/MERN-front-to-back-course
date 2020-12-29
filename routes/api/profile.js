const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc TEST route
// @access public
router.get('/', (req, res) => res.send('Profile router'));

module.exports = router;