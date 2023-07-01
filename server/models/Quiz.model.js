const { Schema, model } = require("mongoose");

const quizSchema = new Schema(
    {
        NumberOfSteps: {
          type: Number,
        },
        Questions: [{
            type: mongoose.Questions.ObjectId, ref: "Questions"
        }],
        Category: {
            type: String,
            enum: ['HTML', 'CSS', '', '']
        }
      },
      
    
  );
  
  const Quiz = model("Quiz", quizSchema);
  
  module.exports = Quiz;