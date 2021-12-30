import { Router } from 'express';
import { route } from 'express/lib/application';
import * as GolfCourseController from './controller';

const routes = new Router();

routes.get('/getAllGolfCourses', GolfCourseController.getAllGolfCourses);
routes.put('/putNewGolfCourse', GolfCourseController.putNewGolfCourse);
routes.get('/testApi', GolfCourseController.testApi);

export default routes;
