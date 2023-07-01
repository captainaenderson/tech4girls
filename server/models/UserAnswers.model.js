const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
    {
        Question: {
            type: mongoose.Question.ObjectId, ref: "Question"
        },
        Answer: {
            type: String,
            required: true
        },
        Quiz: {
            type: mongoose.Quiz.ObjectId, ref: "Quiz"
        },
      },
      
    
  );
  
  const Question = model("Question", questionSchema);
  
  module.exports = Question;