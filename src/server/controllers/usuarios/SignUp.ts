import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';
import { IUsuario } from '../../database/models';
import { UserProvider } from '../../database/providers';


interface IBodyProps extends Omit<IUsuario, 'id'> {};


export const signUpValidation = validation( (getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().min(3).required(),
        username: yup.string().min(3).required(),
        password: yup.string().min(6).required(),
    })),
}));



export const signUp = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    const result = await UserProvider.create(req.body);

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