import { Router } from 'express';
import GetOrderController from '../controllers/getOrderController';


const order = Router();


order.get('/order', GetOrderController.getOrder());
order.post('/order/id/:id', );
order.put('/order/id/:id', );
order.delete('/order/id/:id', );

export default order;