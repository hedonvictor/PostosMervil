import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex): Promise<void> {
    return knex
        .schema
        .createTable(ETableNames.usuario, table => {
            table.bigIncrements('id').primary().index();
            table.string('nome').notNullable();
            table.string('username').index().unique().notNullable().checkLength('>', 3);
            table.string('password').notNullable().checkLength('>', 6);

            table.comment('Tabela para armazenar usuários do sistema')
        })
        .then(() => {
            console.log(`# Create Table ${ETableNames.usuario}`);
        });
};


export async function down(knex: Knex): Promise<void> {
    return knex
        .schema
        .dropTable(ETableNames.usuario)
        .then(() => {
            console.log(`# Drop Table ${ETableNames.usuario}`);
        });
};
