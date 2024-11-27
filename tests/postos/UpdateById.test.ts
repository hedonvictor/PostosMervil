import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"

describe('Postos - UpdateById', () => {
    it('Atualizar registro por Id', async () => {
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
        
        const resAtualizada = await testServer
            .put(`/postos/${res1.body}`)
            .send({ nome: 'postozangao',
                rede: 'Shell',
                UF: 'SP',
                endereco: 'tanana, 296, Ourinhos',
                contato: 'postogalinha@teste.com',
                status: true 
            });
        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Tenta atualizar um registro que nao existe', async () => {
        const res1 = await testServer
            .put('/postos/99999')
            .send({nome: 'sheol',
                rede: 'Shell',
                UF: 'SP',
                endereco: 'tanana, 296, Ourinhos',
                contato: 'postogalinha@teste.com',
                status: true 
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors')
    });
})