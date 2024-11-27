import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Postos - GetAll', () => {
    it('Buscar todos os registros', async () => {
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
            .get('/postos')
            .send();

        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    });
});
