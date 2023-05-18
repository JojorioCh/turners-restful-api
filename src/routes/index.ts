import express from "express";
import * as carController from "../controller/carController";

const router = express.Router();

router.get("/", carController.getAllCars);

router.post("/", carController.addCar);

router.get("/:id", carController.getOneCar);

router.put("/:id", carController.updateCar);

router.patch("/:id", carController.patchCar);

router.delete("/:id", carController.deleteCar);

export default router;
