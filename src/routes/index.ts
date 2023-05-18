import express from "express";
import * as carController from "../controller/carController";
import * as quoteApiControl from "../controller/quoteApiControl";

const router = express.Router();

router.get("/carvalue/", carController.getAllCars);

router.post("/carvalue/", carController.addCar);

router.get("/carvalue/:id", carController.getOneCar);

router.put("/carvalue/:id", carController.updateCar);

router.patch("/carvalue/:id", carController.patchCar);

router.delete("/carvalue/:id", carController.deleteCar);

router.get("/quotes/", quoteApiControl.getAllQuotes);

router.post("/quotes/", quoteApiControl.createAQuote);

router.get("/quotes/:id", quoteApiControl.pullUpAQuote);

router.delete("/quotes/:id", quoteApiControl.deleteAQuote);

router.patch("/quotes/:id", quoteApiControl.updateAQuote);

export default router;
