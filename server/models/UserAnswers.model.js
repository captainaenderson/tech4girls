const { Schema, model } = require("mongoose");

const UserAnswersSchema = new Schema(
    {
        Question: {
            type: Schema.Types.ObjectId, ref: "Question"
        },
        Answer: {
            type: String,
            required: true
        },
        Quiz: {
            type: Schema.Types.ObjectId, ref: "Quiz"
        },
      },
      
    
  );
  
  const Question = model("Question", UserAnswersSchema);
  
  module.exports = Question;