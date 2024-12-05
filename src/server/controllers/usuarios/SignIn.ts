import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';


import { validation } from '../../shared/middleware';
import { IUsuario } from '../../database/models';
import { UserProvider } from '../../database/providers';
import { JWTService, PasswordCrypto } from '../../shared/services';


interface IBodyProps extends Omit<IUsuario, 'id' | 'nome'> {};


export const signInValidation = validation( (getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        username: yup.string().min(3).required(),
        password: yup.string().min(6).required(),
    })),
}));



export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    const {username, password} = await req.body;

    const user = await UserProvider.getByUsername(username)

    
    if(user instanceof Error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Usuário nao encontrado'
        })
        return;
    };

    const passwordMatch = await PasswordCrypto.verifyPassword(password, user.password)

    if(!passwordMatch) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Credenciais inválidas'
        })
        return;
    };

    const token = JWTService.sign({uid: user.id});

    if(token === 'JWT_SECRET_NOT_FOUND') {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Erro ao gerar o token de acesso'
        })
        return;
    }

    res.status(StatusCodes.OK).json({token});
};