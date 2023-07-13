const router = require("express").Router();
const Question = require("../models/Question.model")


// POST questions to the database

// THe user opens the questions page (START BUTTON)
// We need to get questions
// Add conditions to get questions based on the level of the student // level // age...


router.post("/", async (req, res) => {
    try {
      const question = await Question.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(400).json({ error: "Failed to create question." });
    }
  });

// GET a question

module.exports = router;