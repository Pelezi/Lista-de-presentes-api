import { Router } from 'express';


//import addressRouter from '../../../modules/account/address/api/routes/address.routes';
import userRouter from '../../../modules/auth/user/api/routes/user.routes';
import companyRouter from '../../../modules/account/company/api/routes/company.routes';
import typeRouter from '../../../modules/account/type/api/routes/type.routes';
import priceRouter from '../../../modules/catalog/price/api/routes/price.routes';
import productRouter from '../../../modules/gift/api/routes/product.routes';
import offerRouter from '../../../modules/catalog/offer/api/routes/offer.routes';
import editUserRouter from '../../../modules/editUser/api/routes/editUserController.routes';

//Import dos externalSearches
import averagePricePerYearRouter from '../../../modules/externalSearches/routes/averagePricePerYear.routes';
import movingAverageRouter from '../../../modules/externalSearches/routes/movingAverage.routes';
import oneMonthAgoRouter from '../../../modules/externalSearches/routes/oneMonthAgo.routes';
import oneSemesterAgoRouter from '../../../modules/externalSearches/routes/oneSemesterAgo.routes';
import oneYearAgoRouter from '../../../modules/externalSearches/routes/oneyearAgo.routes';
import pricePerDayRouter from '../../../modules/externalSearches/routes/pricePerDay.routes';
import pricePerMonthRouter from '../../../modules/externalSearches/routes/pricePerMonth.routes';
import pricePerYearRouter from '../../../modules/externalSearches/routes/pricePerYear.routes';
// import conabRouter from '../../../modules/externalSearches/conab/routes/conab.routes'

//Import dos internalSearches
import authRouter from '../../../modules/auth/auth/api/routes/auth.routes';


//router.use('/address' , addressRouter);

const router = Router();
//Rotas do externalSearches

router.use('/auth', userRouter);
router.use('/auth', authRouter);


router.use('/editUser', editUserRouter)
router.use('/companies', companyRouter);
router.use('/type', typeRouter);
router.use('/price', priceRouter);
router.use('/products', productRouter);
router.use('/offer', offerRouter);

router.use('/averageyear', averagePricePerYearRouter);
router.use('/movingaverage', movingAverageRouter);
router.use('/onemonthago', oneMonthAgoRouter);
router.use('/onesemesterago', oneSemesterAgoRouter);
router.use('/oneyearago', oneYearAgoRouter);
router.use('/day', pricePerDayRouter);
router.use('/month', pricePerMonthRouter);
router.use('/year', pricePerYearRouter);

// router.use('/conab', conabRouter);

export default router;
