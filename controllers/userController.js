

const { User, Thought } = require('../models');

module.exports = {

  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
      });
  },

  // Get one user
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  },

  // create new user
  createUser(req, res) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
      });
},

  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  },

  // Delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((data) =>
        res.json(data),
      )
      .catch((err) => {
        console.log(err)
      });
  },
  
  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $addToSet: { friends: req.params.friendId } }, 
      { runValidators: true, new: true })
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      })
  },

  // Remove a friend
  removeFriend(req, res) {
    return User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $pull: { friends: req.params.friendId } }, 
      { runValidators: true, new: true })
      .then((data) =>
        res.json(data)
      )
      .catch((err) => {
        console.log(err)
      });
  }
};