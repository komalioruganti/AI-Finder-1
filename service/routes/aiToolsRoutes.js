const express = require("express");
const { getAllAITools, getAiToolById,getAiToolByNameAndTags } = require("../controllers/aiTools");
const router = express.Router();


router.get("/getAllAiTools", getAllAITools);
router.get("/getAiToolById/", getAiToolById);
router.get("/getAiToolByNameAndTags/", getAiToolByNameAndTags);


module.exports = router;
