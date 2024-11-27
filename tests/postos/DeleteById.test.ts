import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"

describe('Postos - DeleteById', () => {
    it('Apaga registro', async () => {
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
        
        const resApagada = await testServer
            .delete(`/postos/${res1.body}`)
            .send();
        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Tenta apagar registro que nao existe', async () => {
        const res1 = await testServer
        .delete('/postos/99999')

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors');
    }); 
});