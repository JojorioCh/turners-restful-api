import express from "express";
import * as quoteApiControl from "../controller/quoteApiControl";

const router = express.Router();

router.get("/quotes", quoteApiControl.getAllQuotes);
router.post("/quotes", quoteApiControl.createAQuote);
// router.get("/quotes:id", quoteApiControl.retrieveAQuote);
// router.delete("/quotes:id", quoteApiControl.deleteAQuote);
// router.put("/quotes:id", quoteApiControl.updateAQuote);
// router.patch("/quotes:id", quoteApiControl.partialQuoteUpdate);

export default router;
