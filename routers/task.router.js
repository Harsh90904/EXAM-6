const express = require('express');
const router = express.Router();
const { getUserTasks } = require('../controllers/task.controller');

router.get('/tasks/:userId', getUserTasks);

module.exports = router;
