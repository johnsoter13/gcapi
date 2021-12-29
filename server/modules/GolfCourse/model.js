import mongoose, { Schema } from 'mongoose';

const GolfCourseSchema = new Schema({
  golfCourseName: {
    type: String,
    required: true,
  },
});

// export default mongoose.model('What2Watch', What2WatchSchema);
export default mongoose.model('GolfCourse', GolfCourseSchema);
