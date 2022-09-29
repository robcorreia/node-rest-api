import { Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/random", ApiController.random);

router.get("/name/:name", ApiController.name);

router.post("/frases", ApiController.createPhrase);

export default router;
