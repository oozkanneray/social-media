import asynchandler from "express-async-handler";
import { Post } from "../models/postSchema";

const createPost = asynchandler((req, res) => {
  const { description, title } = req.body;
  const newPost = Post.create({
    title: title,
    description: description,
  });

  if (newPost) res.status(200).json(newPost);
  else res.status(400).json("something wrong!");
});

const getAllPost = asynchandler(async (req, res) => {
  const posts = await Post.find();
  if (posts) res.status(200).json(posts);
  else res.status(400).json("something wrong!");
});

const getPostByID = asynchandler(async (req, res) => {
  const postID = req.params.id;
  const post = await Post.findById(postID);
  if(post) res.status(200).json(post)
  else res.status(400).json("something wrong")
   
});
const deletePost = asynchandler(async (req, res) => {
  const postID = req.params.id;
  const deletePost = await Post.deleteOne({ id: postID });
  if (deletePost) res.status(200).json("post deleted");
  else res.status(400).json("post not found");
});
const upadetPost = asynchandler(async(req, res) => {});

export { createPost, getAllPost, deletePost, upadetPost, getPostByID };
