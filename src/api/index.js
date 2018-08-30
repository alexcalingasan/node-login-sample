import express from 'express';
import { clientRouter } from './resources/client';
import { userRouter } from './resources/user';

export const restRouter = express.Router();
restRouter.use('/clients', clientRouter);
restRouter.use('/users', userRouter);
