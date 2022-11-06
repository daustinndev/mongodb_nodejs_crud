import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    username: {
      type: String,
      default: "Default",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Task", taskSchema);
