import { NextFunction, Request, Response, Router } from 'express';

import order from './orderRoutes';


const routes = Router();

routes.use('/api/v1', order);

routes.use((req: Request, _res: Response, next: NextFunction) => {
  next();
});

export default routes;