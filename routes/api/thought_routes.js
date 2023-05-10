

const router = require('express').Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// ENDPOINT: /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// ENDPOINT: /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

// ENDPOINT: /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// ENDPOINT: /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);
  

module.exports = router;