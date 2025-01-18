import { Request, Response } from 'express';
import { BaseController } from '../../../base/BaseController';

export interface ProductController extends BaseController {
    getByUser(req: Request, res: Response): Promise<Response>;
    getAllInfo(req: Request, res: Response): Promise<Response>;
    getAverageSevenDaysByName(re: Request, res: Response): Promise<Response>;
    typeFilter(req: Request, res: Response): Promise<Response>;
    subTypeFilter(req: Request, res: Response): Promise<Response>;
    productFilter(req: Request, res: Response): Promise<Response>;
}
