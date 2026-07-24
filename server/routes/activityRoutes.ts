
import  express  from "express";
import { protect } from "../middlewares/authmiddleware.js";
import { getActivity } from "../controllers/ActivityControllers.js";



const activityRouter = express.Router()


activityRouter.get('/',protect,getActivity)



export default activityRouter;