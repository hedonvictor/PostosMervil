import { IPosto } from "../../models";


declare module 'knex/types/tables' {
    interface Tables {
        posto: IPosto
    }
};