import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Usuario - SignUp', () => {
    it('cria registro', async () => {
        const res1 = await testServer
            .post('/cadastrar')
            .send({
            nome: 'Deyverson',
            username: 'deiviReiDelas',
            password: '1234567'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });

    
})