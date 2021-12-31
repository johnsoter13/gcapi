import GolfCourse from './model';
import { DEFAULT_SERVER_FAILURE_CODE, DEFAULT_SUCCESS_CODE, SQL_CONFIG } from './constants';
const sql = require('mssql');


// Select statements to database
export const getAllGolfCourses = async (req, res) => {
  try {
    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = 'use golf_db; select * from GolfCourse';

      request.query(query, (err, recordset) => {
        if (err) {
          throw err;
        }

        return res.status(DEFAULT_SUCCESS_CODE).json({ getAllGolfCourses: recordset.recordset });
      });
    });
  } catch (e) {
    return res
      .status(e.status || DEFAULT_SERVER_FAILURE_CODE)
      .json({ error: true, message: 'error with getAllGolfCourses' });
  }
};

export const getAllGolfers = async (req, res) => {
  try {
    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = 'use golf_db; select * from Golfer';

      request.query(query, (err, recordset) => {
        if (err) {
          throw err;
        }

        return res.status(DEFAULT_SUCCESS_CODE).json({ getAllGolfers: recordset.recordset });
      });
    });
  } catch (e) {
    return res
      .status(e.status || DEFAULT_SERVER_FAILURE_CODE)
      .json({ error: true, message: 'error with getAllGolfers' });
  }
};

export const getAllGolfRounds = async (req, res) => {
  try {
    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = 'use golf_db; select * from GolfRound';

      request.query(query, (err, recordset) => {
        if (err) {
          throw err;
        }

        return res.status(DEFAULT_SUCCESS_CODE).json({ getAllGolfRounds: recordset.recordset });
      });
    });
  } catch (e) {
    return res
      .status(e.status || DEFAULT_SERVER_FAILURE_CODE)
      .json({ error: true, message: 'error with getAllGolfRounds' });
  }
};

// All insert statements for database
export const putNewGolfCourse = async (req, res) => {
  try {
    const golfCourseBody = req.body;

    const golfCourseName = golfCourseBody.golfCourseName;
    const golfCourseRating = golfCourseBody.golfCourseRating
    const golfCourseSlope = golfCourseBody.golfCourseSlope
    const golfCourseYards = golfCourseBody.golfCourseYards
    const golfCourseParScore = golfCourseBody.golfCourseParScore
    const golfCourseHandicap = golfCourseBody.golfCourseHandicap;

    if (!golfCourseName || !golfCourseRating || !golfCourseSlope || !golfCourseYards || !golfCourseParScore || !golfCourseHandicap) {
      return res.status(400).json({message: 'all fields are requried'});
    }

    // needs to be 5 numbers or less, with two decimal
    const gcRatingFixed = golfCourseRating.toFixed(2);
    const gcSlope = golfCourseSlope.toFixed(2);

    // needs to be 4 numbers or less, with two decimal
    const gcHandicap = golfCourseHandicap.toFixed(2);

    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = `use golf_db; insert into GolfCourse values ('${golfCourseName}', ${gcRatingFixed}, ${gcSlope}, ${golfCourseYards}, ${golfCourseParScore}, ${gcHandicap})`;

      request.query(query, (err) => {
        if (err) {
          throw err;
        }

        return res.status(DEFAULT_SUCCESS_CODE).json({ success: true });
      });
    })
  } catch (e) {
    return res
    .status(e.status || DEFAULT_SERVER_FAILURE_CODE)
    .json({ error: true, message: 'error with putNewGolfCourse' });
  }
}

export const putNewGolfer = async (req, res) => {
  try {
    const golferBody = req.body;

    const golferName = golferBody.golferName;

    if (!golferName) {
      return res.status(400).json({message: 'all fields are requried'});
    }

    sql.connect(SQL_CONFIG, (err) => {
      let request = new sql.Request();

      const query = `use golf_db; insert into Golfer values ('${golferName}')`;

      request.query(query, (err) => {
        if (err) {
          throw err;
        }

        return res.status(DEFAULT_SUCCESS_CODE).json({ success: true });
      });
    })
  } catch (e) {
    return res
    .status(e.status || DEFAULT_SERVER_FAILURE_CODE)
    .json({ error: true, message: 'error with putNewGolfCourse' });
  }
}

export const testApi = async (req, res) => {
  try {
    console.log('test worked');
    return res.status(DEFAULT_SUCCESS_CODE).json({ testApi: 'true' });
  }

  catch (e) {
    console.log('error')
  }
}
