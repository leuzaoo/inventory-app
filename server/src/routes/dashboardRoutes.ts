import { getDashboardMetrics } from "../controllers/dashboardController";
import { Router } from "express";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
