import GolfCourse from './model';
const sql = require('mssql');

export const getAllGolfCourses = async (req, res) => {
  try {
    let config = {
      user: 'golf_user',
      password: 'a',
      server: 'DESKTOP-2EBCEMD',
      database: 'golf_db',

      options: {
        trustedConnection: true,
        trustServerCertificate: true,
      },
    };

    sql.connect(config, (err) => {
      let request = new sql.Request();

      request.query('select * from GolfCourse', (err, recordset) => {
        if (err) {
          console.log(err);
        }

        return res.status(200).json({ getAllGolfCourses: recordset.recordset });
      });
    });
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error with What2Watch' });
  }
};
