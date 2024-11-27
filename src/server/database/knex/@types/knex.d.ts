import { IPosto, IUsuario } from "../../models";


declare module 'knex/types/tables' {
    interface Tables {
        posto: IPosto;
        usuario: IUsuario;
    }
};