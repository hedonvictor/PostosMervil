import { Knex } from "knex"
import { ETableNames } from "../ETableNames"


export const seed = async (knex: Knex) => {

    const [{ count }] = await knex(ETableNames.posto).count<[{count: number }]>('* as count');
    if(!Number.isInteger(count) || Number(count) > 0) return;

    const postosToInsert = postosInitial.map(posto  => ({
        nome: posto.nome,
        rede: posto.rede,
        UF: posto.UF,
        endereco: posto.endereco,
        contato: posto.contato,
        status: posto.status
    }));
    await knex(ETableNames.posto).insert(postosToInsert);
};


const postosInitial = [
    {
        nome: 'Juninho (antigo Chapadão)',
        rede: 'juninho',
        UF: 'PR',
        endereco: 'Santo antônio da Platina',
        contato: 'chapadao153@gmail.com',
        status: false 
    },
    {
        nome: 'monte carlo Pga (antigo Safrão)',
        rede: 'Juninho (Monte carlo)',
        UF: 'PR',
        endereco: 'Paranaguá',
        contato: 'postoparanagua@redemontecarlo.com.br - montecarloparanagua@gmail.com',
        status: true 
    },
    {
        nome: 'Pedro Pelanda Matriz',
        rede: 'Pedro Pelanda',
        UF: 'PR',
        endereco: 'Rod BR 116 KM 128 s/n Santa Terezinha',
        contato: 'caixa22@pedropelanda.com.br',
        status: true 
    },
    {
        nome: 'Juliane Pelanda',
        rede: 'Pedro Pelanda',
        UF: 'PR',
        endereco: 'ROD.BR 376 KM 633 32500 LOC. DE - Contenda, PR, 83115-004',
        contato: 'pelanda3@pedropelanda.com.br',
        status: true 
    },
    {
        nome: 'Pelanda 27 ',
        rede: 'Pedro Pelanda',
        UF: 'PR',
        endereco: 'ROD BR 376, KM 626 Nº 27500 - Contenda, São José dos Pinhais - PR, 83115-004',
        contato: 'caixa27@pedropelanda.com.br',
        status: true 
    },
    {
        nome: 'ALPINO 1',
        rede: 'Pelanda',
        UF: 'PR',
        endereco: 'Campina do monte alegre/ Rodovia BR-116/km 31 sentido são paulo',
        contato: 'postoalpino1@postospelanda.com.br',
        status: true 
    },
    {
        nome: 'ALPINO 2',
        rede: 'Pelanda',
        UF: 'PR',
        endereco: 'Campina do monte alegre/ R. BR-116/km 25 Sentido curitiba',
        contato: 'postoalpino2@postospelanda.com.br',
        status: true 
    },
    {
        nome: 'ALPINO 3',
        rede: 'Pelanda',
        UF: 'PR',
        endereco: 'Antonina/C. Monte Alegre BR- 116/km 19,5 sentido SP',
        contato: 'postoalpino3@postospelanda.com.br',
        status: true 
    },
    {
        nome: 'ALPINO 4',
        rede: 'Pelanda',
        UF: 'PR',
        endereco: 'Antonina/C. Monte Alegre BR- 116/km 19,5 sentido Curitiba',
        contato: 'postoalpino4@postospelanda.com.br',
        status: true 
    },
    {
        nome: 'Aldo Cubatão',
        rede: 'Aldo',
        UF: 'SP',
        endereco: 'Av. Manoel Santos Pereira, 100 - Zona Industrial, Cubatão - SP, 11570-010',
        contato: 'postocubatao@grupoaldo.com.br',
        status: true 
    },
    {
        nome: 'Auto posto Menino Jesus - Alciati & Alciati',
        rede: 'Alciati & Alciati ',
        UF: 'SP',
        endereco: 'SP - 270, S/N - KM 168 - Jardim Bela Vista, Itapetininga - sp, 18203-340',
        contato: 'recepcao.postoalciati@gmail.com',
        status: true 
    },
    {
        nome: 'Bizungão II Avaré',
        rede: 'Bizunga',
        UF: 'SP',
        endereco: 'Avaré - Dentro da cidade',
        contato: 'pista@bizunga.com.br',
        status: true 
    },
    {
        nome: 'Bizungão III Castelo',
        rede: 'Bizunga',
        UF: 'SP',
        endereco: 'Avaré - Na rodovia',
        contato: 'pistacastelo@bizunga.com.br',
        status: true 
    },
    {
        nome: 'Ilha Verde',
        rede: 'Bizunga',
        UF: 'SP',
        endereco: 'Avaré',
        contato: 'ilhaverde@bizunga.com.br',
        status: true 
    },
    {
        nome: 'Brigadeiro II',
        rede: 'Brigadeiro',
        UF: 'SP',
        endereco: 'Ourinhos',
        contato: 'costa-andrade@hotmail.com',
        status: true 
    },
    {
        nome: 'Mc1 Matriz',
        rede: 'MONTE CARLO',
        UF: 'SP',
        endereco: 'ROD Assis Chateaubriand km 177,5 Cep 15.061-500 (São José do Rio Preto)',
        contato: '(17)21366464 - (17) 997898460 - riopreto@redemontecarlo.com.br',
        status: true 
    },
    {
        nome: 'Onda Verde',
        rede: 'MONTE CARLO',
        UF: 'SP',
        endereco: 'Rod BR 153 km 44 Cep 15450000 (Onda Verde)',
        contato: '(17) 21366462 - (17)997575535 - ondaverde@postosmontecarlo.com.br',
        status: true 
    },
    {
        nome: 'São José (CARLO ORLÂNDIA)',
        rede: 'MONTE CARLO',
        UF: 'SP',
        endereco: 'Rod Vicinal Coronel Francisco Orlando - km 0,8 Cep 14620000',
        contato: '(16) 38203500 - (17) 997856836 - postosaojose@redemontecarlo.com.br',
        status: true 
    },
    {
        nome: 'Aeroporto',
        rede: 'MONTE CARLO',
        UF: 'SP',
        endereco: 'Av. Otávio Luis de Marchi 55 Cep 15035660 (São José do Rio Preto)',
        contato: '(17) 988216549 - marcus.moraes@redemontecarlo.com.br',
        status: true 
    },
    {
        nome: 'Parateí (SÃO JORGE DO PARATEÍ)',
        rede: 'MONTE CARLO',
        UF: 'SP',
        endereco: 'Rod Presidente Dutra km 179,4 S/N Cep: 08900000 (Guararema)',
        contato: '(11) 46935485 - postoparatei@redemontecarlo.com.br',
        status: true 
    },
    {
        nome: 'Amigão',
        rede: 'Paulista',
        UF: 'SP',
        endereco: 'Maracaí',
        contato: 'caixaamigao@outlook.com',
        status: true 
    },
    {
        nome: 'Paulista - Ibirarema',
        rede: 'Paulista',
        UF: 'SP',
        endereco: 'Ibirarema',
        contato: 'caixa.paulistaibirarema@hotmail.com',
        status: true 
    },
    {
        nome: 'Paulista - Novo Oeste',
        rede: 'Paulista',
        UF: 'SP',
        endereco: 'Assis',
        contato: 'paulistanovoeste@hotmail.com',
        status: true 
    },
];
