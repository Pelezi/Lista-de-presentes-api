import { Router } from 'express';
import { container } from 'tsyringe';

import { GiftController } from '../controllers/GiftController'

import baseRoutes from '../../../base/base.routes';

const giftRouter = Router();

const giftController: GiftController = container.resolve('GiftController');


giftRouter.get('/info/:giftId', (req, res) => giftController.getAllInfo(req, res));
giftRouter.get('/user/:userId', (req, res) => giftController.getByGuest(req, res));
giftRouter.use('/', baseRoutes(giftController));

export default giftRouter;
