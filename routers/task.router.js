const express = require('express');
const router = express.Router();
const { getUserTasks, filter } = require('../controllers/task.controller');

router.get('/tasks/:userId', getUserTasks);
router.get('/filter', filter);

module.exports = router;
