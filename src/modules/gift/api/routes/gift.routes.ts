import { Router } from 'express';
import { container } from 'tsyringe';

import { GiftController } from '../controllers/GiftController'

import baseRoutes from '../../../base/base.routes';

const giftRouter = Router();

const giftController: GiftController = container.resolve('GiftController');


giftRouter.get('/info/:giftId', (req, res) => giftController.getAllInfo(req, res));
giftRouter.get('/guest/:userId', (req, res) => giftController.getByGuest(req, res));
giftRouter.post('/:giftId/guest/:guestId', (req, res) => giftController.addGiftToGuest(req, res));
giftRouter.delete('/:giftId/guest/:guestId', (req, res) => giftController.removeGiftFromGuest(req, res));
giftRouter.use('/', baseRoutes(giftController));

export default giftRouter;
