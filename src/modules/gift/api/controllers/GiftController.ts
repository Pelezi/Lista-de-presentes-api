import { Request, Response } from 'express';
import { BaseController } from '../../../base/BaseController';

export interface GiftController extends BaseController {
    getByGuest(req: Request, res: Response): Promise<Response>;
    getAllInfo(req: Request, res: Response): Promise<Response>;
}
