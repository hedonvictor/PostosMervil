import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Postos - Create', () => {

    let accesToken = '';

    beforeAll(async () => {
        const username = 'deivinOretorno';
        await testServer.post('/cadastrar').send({
            nome: 'deivasso',
            username,
            password: '1234567'
        })
        const signInRes = await testServer.post('/entrar').send({username, password: '1234567'});

        accesToken = signInRes.body.token;
    })

    it('cria registro', async () => {
        const res1 = await testServer
            .post('/postos')
            .set({authorization: `Bearer ${accesToken}`})
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
            .set({Authorization: `Bearer ${accesToken}`})
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
