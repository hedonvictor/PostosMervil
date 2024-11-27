import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { PostosProvider } from '../../database/providers/postos';


interface IQueryProps {
    id?: number;
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation( (getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        id: yup.number().integer().optional().default(0),
        filter: yup.string().optional(),
    })),
}));





export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

    const result = await PostosProvider.getAll(req.query.page || 1,req.query.limit || 7, req.query.filter || '', Number(req.query.id));
    const count = await PostosProvider.count(req.query.filter);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
        return;
    } else if (count instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: count.message
            }
        })
        return;
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    res.status(StatusCodes.OK).json(result);
};