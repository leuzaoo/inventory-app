"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboardController_1 = require("../controllers/dashboardController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", dashboardController_1.getDashboardMetrics);
exports.default = router;
