import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';
import { IPosto } from '../../database/models';
import { PostosProvider } from '../../database/providers/postos';


interface IBodyProps extends Omit<IPosto, 'id'> {};


export const createValidation = validation( (getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().min(3).required(),
        rede: yup.string().min(3).required(),
        UF: yup.string().min(2).required(),
        endereco: yup.string().min(3).required(),
        contato: yup.string().min(3).required(),
        status: yup.boolean().required(),
    })),
}));





export const create = async (req: Request<{}, {}, IPosto>, res: Response) => {
    const result = await PostosProvider.create(req.body);

    if(result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
        return;
    }

    res.status(StatusCodes.CREATED).json(result);
};