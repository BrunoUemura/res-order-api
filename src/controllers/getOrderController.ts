import OrderServices from '../services/orderServices';

class GetOrderController {

    static getOrder() {
        return async (req, res) => {
            await OrderServices.retrieveOrder();
            res.send(console.log("2nd ..."));
        }
    }

}
export default GetOrderController;