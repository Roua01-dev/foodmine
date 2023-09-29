import {Router}from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constante/http_status';
import { OrderModel } from '../models/order.model';
import { OrderStatus } from '../constante/order_status';
import auth from'../middlewares/auth.mid'
const router=Router();
router.use(auth);

router.post('/create',asyncHandler(async(req:any,res:any)=>{
    const requestOrder=req.body;
    if(requestOrder.items.length<=0){
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user:req.user.id,
        status:OrderStatus.NEW
    });
    const newOrder=new OrderModel({...requestOrder,user:req.user.id});
    await newOrder.save();
    res.send(newOrder);
}))



router.get('/newOrderForCurrentUser',asyncHandler(async(req:any,res)=>{
    const order=await getNewOrderForCurrentUser(req);

    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
    


}))


/*req.params :

req.params est un objet qui contient les paramètres d'une 
route définie dans votre application Express. Ces paramètres 
sont extraits de l'URL et peuvent être définis dans la route 
avec des marqueurs de paramètres, généralement précédés de 
deux-points (:). Par exemple, dans la route /users/:id, 
req.params.id contiendra la valeur de id de l'URL. */


router.get('/track/:id',asyncHandler(async(req,res)=>{
    const order=await OrderModel.findById(req.params.id); 
    res.send(order);

}) )

router.post('/pay',asyncHandler(async(req:any,res)=>{
    const {paymentId}=req.body;
    const order=await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send("order not found!");
        return ;
    }
    order.paymentId=paymentId;
    order.status=OrderStatus.PAYED;
    await order.save();
    res.send(order._id);

}))

export default router;

async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}
