

import  express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { generatePost, getGenerations, getPosts, scheduelePost } from "../controllers/postController.js";
import { upload } from "../config/multer.js";

const postRouter = express.Router();

postRouter.get('/',protect,getPosts);

postRouter.get('/generations',protect,getGenerations);

postRouter.post('/',protect,upload.single("media"),scheduelePost);

postRouter.post('/generate',protect,generatePost);


export default postRouter