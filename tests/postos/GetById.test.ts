import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"

describe('Postos - GetById', () => {
    it('BUsca registro por Id', async () => {
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
        
        const resBuscada = await testServer
            .get(`/postos/${res1.body}`)
            .send();
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('nome');
    });

    it('Tenta buscar um registro que nao existe', async () => {
        const res1 = await testServer
            .get('/postos/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors');
    });
})