import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { PostosProvider } from '../../database/providers/postos';


interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation( (getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));





export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    
    if(!req.params.id){
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O "id" precisa ser informado'
            }
        });
        return;
    }

    const result = await PostosProvider.deleteById(req.params.id);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                deafult: result.message
            }
        })
        return;
    }

    res.status(StatusCodes.NO_CONTENT).send();
};