import { Router } from "express";
import multer from "multer";

import * as ApiController from "../controllers/apiController";

// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./tmp");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   },
// });
const storageConfig = multer.memoryStorage();

const upload = multer({
  storage: storageConfig,
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
router.post("/upload", upload.single("avatar"), ApiController.uploadFile);

export default router;
