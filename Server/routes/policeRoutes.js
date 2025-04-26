import { Router } from "express";
import { getComplaints } from "../controllers/complaints.js";

const policeRouter = Router()

policeRouter.route('/getComplaints').post(getComplaints)

export {policeRouter}