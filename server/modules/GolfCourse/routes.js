import { Router } from 'express';
import * as GolfCourseController from './controller';

const routes = new Router();

routes.get('/getAllGolfCourses', GolfCourseController.getAllGolfCourses);

export default routes;
