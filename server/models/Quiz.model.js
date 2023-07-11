const { Schema, model } = require("mongoose");

const quizSchema = new Schema(
    {
        NumberOfSteps: {
          type: Number,
        },
        Questions: [{
            type: Schema.Types.ObjectId, ref: "Questions"
        }],
        Category: {
            type: String,
            enum: ['HTML', 'CSS', '', '']
        }
      },
      
    
  );
  
  const Quiz = model("Quiz", quizSchema);
  
  module.exports = Quiz;