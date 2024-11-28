import { PasswordCrypto } from "../../../shared/services";
import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";


export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number | Error> => { 

    try {   
        const hashedPassword = await PasswordCrypto.hashPassword(usuario.password);
        
        const [result] = await Knex(ETableNames.usuario).insert({...usuario, password: hashedPassword}).returning('id');

        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number'){
            return result;
        }

        return new Error('Erro ao cadastrar usuário');

    } catch (error) {
        console.log(error);
        return new Error('Erro ao cadastrar usuário');
    }
}