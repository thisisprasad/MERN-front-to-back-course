const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc TEST route
// @access public
router.get('/', (req, res) => res.send('Auth router'));

module.exports = router;