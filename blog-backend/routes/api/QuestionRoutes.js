const express = require('express');
const router = express.Router();
const QuestionController = require('../../controllers/QuestionController');

// Define routes for CRUD operations
router.get('/', QuestionController.getAllQuestionss);
router.get('/:id', QuestionController.getQuestionsById);
router.post('/', QuestionController.createQuestions);
router.put('/:id', QuestionController.updateQuestions);
router.delete('/:id', QuestionController.deleteQuestions);

module.exports = router;
