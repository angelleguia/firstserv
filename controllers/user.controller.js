const { response } = require("express");
const User = require("../models/users");

const usersGet = (req = request, res = response) => {
  const { q, name = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - controller",
    q,
    name,
    apikey,
    page,
    limit,
  });
};
const usersPost = async (req, res = response) => {
  const body = req.body;
  const user = new User(body);

  await user.save();

  res.json({
    msg: "post API - usersPost",
    user, //Make sure to include user's response.
  });

  //   console.log(`This is ${body.name} and I am ${body.age} y.o.`);
};
const usersPut = (req, res = response) => {
  res.json({
    msg: "put API",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPatch,
  usersPut,
  usersDelete,
};
