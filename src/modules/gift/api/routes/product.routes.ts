import { Router } from 'express';
import { container } from 'tsyringe';

import { ProductController } from '../controllers/ProductController'

import baseRoutes from '../../../base/base.routes';

const productRouter = Router();

const productController: ProductController = container.resolve('ProductController');


productRouter.get('/info/:productId', (req, res) => productController.getAllInfo(req, res));
productRouter.get('/user/:userId', (req, res) => productController.getByUser(req, res));
productRouter.get('/average/:name', (req, res) => productController.getAverageSevenDaysByName(req, res));
productRouter.get('/typeFilter', (req, res) => productController.typeFilter(req, res));
productRouter.get('/subTypeFilter', (req, res) => productController.subTypeFilter(req, res));
productRouter.get('/productfilter', (req, res) => productController.productFilter(req, res));
productRouter.use('/', baseRoutes(productController));

export default productRouter;
