import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IPosto } from "../../models";


export const updateById = async (id: number, posto: Omit<IPosto, 'id'>): Promise<void | Error> => { 

    try {
        const result = await Knex(ETableNames.posto)
            .update(posto)
            .where('id', '=', id)

        if(result > 0) return;

        return new Error('Erro ao atualizar registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar registro');
    }
}