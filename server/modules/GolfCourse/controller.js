import GolfCourse from './model';
import { SQL_CONFIG } from './constants';
const sql = require('mssql');

export const getAllGolfCourses = async (req, res) => {
  try {
    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = 'use golf_db; select * from GolfCourse';

      request.query(query, (err, recordset) => {
        if (err) {
          console.log(err);
        }

        return res.status(200).json({ getAllGolfCourses: recordset.recordset });
      });
    });
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error with getAllGolfCourses' });
  }
};

export const putNewGolfCourse = async (req, res) => {
  try {
    const golfCourseBody = req.body;

    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = `use golf_db; insert into GolfCourse values ('${golfCourseBody.golfCourseName}', ${golfCourseBody.golfCourseRating}, ${golfCourseBody.golfCourseSlope}, ${golfCourseBody.golfCourseYards}, ${golfCourseBody.golfCourseParScore}, ${golfCourseBody.golfCourseHandicap})`;

      console.log(query);
      request.query(query, (err) => {
        if (err) {
          console.log(err);
        }

        return res.status(200).json({ success: true });
      });
    })
  } catch (e) {
    return res
    .status(e.status)
    .json({ error: true, message: 'error with putNewGolfCourse' });
  }
}

export const testApi = async (req, res) => {
  try {
    console.log('test worked');
    return res.status(200).json({ testApi: 'true' });
  }

  catch (e) {
    console.log('error')
  }
}
