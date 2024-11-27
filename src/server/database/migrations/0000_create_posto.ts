import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex): Promise<void> {
    return knex
        .schema
        .createTable(ETableNames.posto, table => {
            table.bigIncrements('id').primary().index();
            table.string('nome').index().notNullable();
            table.string('rede');
            table.string('UF').notNullable();
            table.string('endereco').notNullable();
            table.string('contato').notNullable();
            table.boolean('status').notNullable();

            table.comment('Tabela para armazenar postos do sistema')
        })
        .then(() => {
            console.log(`# Create Table ${ETableNames.posto}`);
        });
};


export async function down(knex: Knex): Promise<void> {
    return knex
        .schema
        .dropTable(ETableNames.posto)
        .then(() => {
            console.log(`# Drop Table ${ETableNames.posto}`);
        });
};
