import mongoose from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [alex, sam] = await User.create([
      { name: 'Alex Morgan', email: 'alex@example.com', password: 'octofit-demo' },
      { name: 'Sam Rivera', email: 'sam@example.com', password: 'octofit-demo' },
    ]);

    const team = await Team.create({ name: 'Summit Squad', members: [alex._id, sam._id], points: 185 });

    await Activity.create([
      { user: alex._id, type: 'running', duration: 35, distance: 5.2, points: 60 },
      { user: sam._id, type: 'strength', duration: 30, points: 45 },
    ]);

    await Leaderboard.create([
      { user: alex._id, team: team._id, points: 100, rank: 1 },
      { user: sam._id, team: team._id, points: 85, rank: 2 },
    ]);

    await Workout.create({
      user: alex._id,
      title: 'After-school energizer',
      description: 'A short full-body session for busy school days.',
      exercises: ['Jumping jacks', 'Bodyweight squats', 'Plank'],
      difficulty: 'beginner',
      duration: 20,
    });

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
