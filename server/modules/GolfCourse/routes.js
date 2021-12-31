import { Router } from 'express';
import * as GolfCourseController from './controller';

const routes = new Router();

routes.get('/testApi', GolfCourseController.testApi);

routes.get('/getAllGolfCourses', GolfCourseController.getAllGolfCourses);
routes.get('/getAllGolfers', GolfCourseController.getAllGolfers);
routes.get('/getAllGolfRounds', GolfCourseController.getAllGolfRounds);

routes.put('/putNewGolfCourse', GolfCourseController.putNewGolfCourse);
routes.put('/putNewGolfer', GolfCourseController.putNewGolfer);

export default routes;
