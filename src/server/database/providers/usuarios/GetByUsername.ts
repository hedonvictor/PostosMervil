import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";


export const getByUsername = async (username: string): Promise<IUsuario | Error> => { 

    try {
        const result = await Knex(ETableNames.usuario)
            .select('*')
            .where('username', '=', username)
            .first();

        if(result) return result;

        return new Error('Usuário não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Usuário não encontrado');
    }
}