import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true, trim: true },
    description: String,
    exercises: [{ type: String, trim: true }],
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    duration: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export default model('Workout', workoutSchema);