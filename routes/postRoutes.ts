import express from "express"
import { createPost,deletePost,getAllPost,getPostByID } from "../controllers/postController";
import validateToken from "../middleware/validateTokenHandler";
const router = express.Router();

router.use(validateToken)
router.post("/",createPost)

router.get("/",getAllPost)
router.get("/:id",getPostByID)
router.delete("/:id",deletePost)


export default router;