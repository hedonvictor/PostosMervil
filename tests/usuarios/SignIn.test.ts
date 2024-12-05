import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"


describe('Usuario - SignIn', () => {
    it('Cria o registro', async () => {
        const res1 = await testServer
            .post('/cadastrar')
            .send({
            nome: 'Deyverson',
            username: 'deiviReiDelas',
            password: '1234567'
        });
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });

    it('Tenta Logar', async () => {
        const testaLogin = await testServer
            .post('/entrar')
            .send({
                username: 'deiviReiDelas',
                password: '1234567'
            });

        expect(testaLogin.statusCode).toEqual(StatusCodes.OK);
        expect(testaLogin.body).toHaveProperty('token');
    });

    it('Senha Errada', async () => {
        const testaLogin = await testServer
            .post('/entrar')
            .send({
                username: 'deiviReiDelas',
                password: '12345678'
            });

        expect(testaLogin.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
        expect(testaLogin.body).toHaveProperty('errors.default');
    });
});