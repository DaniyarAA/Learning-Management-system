import { ErrorMiddleware } from './middleware/error';
require("dotenv").config();
import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express(); 

//body parser
app.use(express.json({ limit: "50mb" }))

//cookies parser
app.use(cookieParser());

//cors => cross orign resouces sharing
app.use(cors({ origin: process.env.ORIGIN }))

//testing API
app.get("/test", (req:Request,res:Response,next:NextFunction) => {
    res.status(200).json({
        success: true,
        messsage:"API is working",
    })
})
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
}) 

app.use(ErrorMiddleware);