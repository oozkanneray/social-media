import express from "express";
import { getAllUser, getUserByID, deleteUSer } from "../controllers/userController";

const router = express.Router();


router.get("/user", getAllUser);
router.get("/:id",getUserByID);

router.delete("/:id",deleteUSer);
export default router;
