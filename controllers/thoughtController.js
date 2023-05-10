

const { Thought, User } = require('../models');

// Get all thoughts
module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
      });
  },

  // Get one thought
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((data) => 
        res.json(data))
      .catch((err) => {
        console.log(err)
      });
  },

  // Create new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thought: thought._id } },
          { new: true }
        );
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err)
      });
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, 
      { $set: req.body },
      { new: true }
    )
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  },

  // Add a reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reaction: req.body } },
      { runValidators: true, new: true }
    )
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  },

  // Delete a reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: req.body.reactionId }},
      { runValidator: true, new: true }
    )
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  }
};