import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IPosto } from "../../models";


export const getById = async (id: number): Promise<IPosto | Error> => { 

    try {
        const result = await Knex(ETableNames.posto)
            .select('*')
            .where('id', '=', id)
            .first();

        if(result) return result;

        return new Error('Registro não encontrado');

    } catch (error) {
        console.log(error);
        return new Error('Registro não encontrado');
    }
}