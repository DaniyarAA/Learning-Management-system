import { NextFunction,Response } from "express";
import CatchAsyncError from "../middleware/catchAsyncError";
import OrderModel from "../models/order.model.";

//create new order
export const newOrder = CatchAsyncError(async(data: any, next: NextFunction, res: Response) => {
    const order = await OrderModel.create(data);
    res.status(201).json({
        success: true,
        order: order,
    });
});

//get all orders
export const getAllOrdersService = async(res: Response) => {
    const orders = await OrderModel.find().sort({createdAt: -1});
    res.status(201).json({
        success: true,
        orders,
    });
};
