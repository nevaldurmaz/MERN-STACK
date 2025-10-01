const express = require("express");

const {
  notOlustur,
  notlarGetir,
  notGetir,
  notGuncelle,
  notSil,
} = require("../controlers/notController");
const router = express.Router();

router.get("/", notlarGetir);

router.get("/:id", notGetir);

router.post("/", notOlustur);
router.delete("/:id", notSil);
router.patch("/:id", notGuncelle);

module.exports = router;
