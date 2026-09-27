import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['running', 'walking', 'strength', 'cycling', 'other'], required: true },
    duration: { type: Number, required: true, min: 1 },
    distance: { type: Number, min: 0 },
    points: { type: Number, default: 0, min: 0 },
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default model('Activity', activitySchema);