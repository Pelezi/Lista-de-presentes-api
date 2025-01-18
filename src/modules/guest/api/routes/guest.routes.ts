import { Router } from 'express';
import { container } from 'tsyringe';

import { GuestController } from '../controllers/GuestController'

import baseRoutes from '../../../base/base.routes';

const guestRouter = Router();

const guestController: GuestController = container.resolve('GuestController');


guestRouter.get('/info/:guestId', (req, res) => guestController.getAllInfo(req, res));
guestRouter.get('/user/:userId', (req, res) => guestController.getByGift(req, res));
guestRouter.use('/', baseRoutes(guestController));

export default guestRouter;
