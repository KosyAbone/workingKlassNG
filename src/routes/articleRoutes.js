const express = require('express');
const articleController = require('../Controllers/articleController')

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);

module.exports = router;
