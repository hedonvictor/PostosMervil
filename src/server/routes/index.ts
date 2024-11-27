import { Router } from "express";
import { PostosController } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    res.send('Olá')
})


router.get('/postos', PostosController.getAllValidation, PostosController.getAll);

router.get('/postos/:id', PostosController.getByIdValidation, PostosController.getById);
router.post('/postos', PostosController.createValidation, PostosController.create);
router.put('/postos/:id', PostosController.updateByIdValidation, PostosController.updateById);
router.delete('/postos/:id', PostosController.deleteByIdValidation, PostosController.deleteById);


export {router};