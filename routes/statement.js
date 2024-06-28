import { Router } from "express";
import { addStatement, getStatement, patchStatement, getStatementById, deleteStatementById } from "../controllers/statement_controller.js";
import { StatementModel } from "../models/statement_model.js";

const statementRouter = Router();

statementRouter.post('/statement', addStatement);

statementRouter.get('/', getStatement);

statementRouter.get('/statement/:id', getStatementById);

statementRouter.patch('/statement/:id', patchStatement);

statementRouter.delete('/statement/:id', deleteStatementById);

export default statementRouter;