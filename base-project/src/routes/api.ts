import { Router } from "express";
import multer from "multer";

import * as ApiController from "../controllers/apiController";

const upload = multer({
  dest: "./tmp",
});

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/random", ApiController.random);

router.get("/name/:name", ApiController.name);

router.post("/frases", ApiController.createPhrase);
router.get("/frases", ApiController.listPhrases);
router.get("/frase/aleatoria", ApiController.randomPhrase);
router.get("/frase/:id", ApiController.getPhrase);
router.put("/frase/:id", ApiController.updatePhrase);
router.delete("/frase/:id", ApiController.deletePhrase);

// router.post("/upload", upload.single("avatar"), ApiController.uploadFile);
// router.post("/upload", upload.array("avatars", 2), ApiController.uploadFile);
router.post(
  "/upload",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "gallery", maxCount: 3 },
  ]),
  ApiController.uploadFile
);

export default router;
