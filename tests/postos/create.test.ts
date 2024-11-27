import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Postos - Create', () => {
    it('cria registro', async () => {
        const res1 = await testServer
            .post('/postos')
            .send({
            nome: 'postogalinha',
            rede: 'Shell',
            UF: 'SP',
            endereco: 'tanana, 296, Ourinhos',
            contato: 'postogalinha@teste.com',
            status: true 
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });
    it('tentar criar registro com nome < 3', async () => {
        const res1 = await testServer
            .post('/postos')
            .send({
            nome: 'po',
            rede: 'Shell',
            UF: 'SP',
            endereco: 'tanana, 296, Ourinhos',
            contato: 'postogalinha@teste.com',
            status: true 
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });
})
