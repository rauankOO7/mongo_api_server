import Data from "../models/data.js";
import express from "express";

const router = express.Router();

router.get("/getData", (req, res) => {
    Data.find().then((data) => {
        res.send(data);
    });
});

export default router;