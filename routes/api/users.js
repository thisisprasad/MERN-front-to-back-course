const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc TEST route
// @access public
router.get('/', (req, res) => res.send('User router'));

module.exports = router;