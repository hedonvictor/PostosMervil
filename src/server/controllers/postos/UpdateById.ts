import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';
import { IPosto } from '../../database/models';
import { PostosProvider } from '../../database/providers/postos';


interface IParamProps {
    id?: number;
}
interface IBodyProps extends Omit<IPosto, 'id'> {};

export const updateByIdValidation = validation( (getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
        rede: yup.string().min(3).required(),
        UF: yup.string().min(2).required(),
        endereco: yup.string().min(3).required(),
        contato: yup.string().min(3).required(),
        status: yup.boolean().required(),
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));





export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

    if(!req.params.id) {
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O "id" precisa ser informado'
            }
        });
        return;
    };

    const result = await PostosProvider.updateById(req.params.id, req.body);

    if(result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
        return;
    }

    res.status(StatusCodes.NO_CONTENT).json(result);
};