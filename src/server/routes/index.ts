import { Router } from "express";
import { PostosController, UserController } from "../controllers";
import { ensureAuthenticated } from "../shared/middleware";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá')
})


router.get('/postos', PostosController.getAllValidation, PostosController.getAll);
router.get('/postos/:id', PostosController.getByIdValidation, PostosController.getById);
router.post('/postos', ensureAuthenticated, PostosController.createValidation, PostosController.create);
router.put('/postos/:id', ensureAuthenticated, PostosController.updateByIdValidation, PostosController.updateById);
router.delete('/postos/:id', ensureAuthenticated, PostosController.deleteByIdValidation, PostosController.deleteById);

router.post('/entrar', UserController.signInValidation, UserController.signIn);
router.post('/cadastrar', UserController.signUpValidation, UserController.signUp);

export {router};