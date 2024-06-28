import { StatementModel } from "../models/statement_model.js";

// Function to store data in the database

export const addStatement = async (req, res) => {

try {
    console.log('request', req.body);
    const addData = await StatementModel.create(req.body);
    res.status(200).send(addData);
} catch (error) {
    console.log(error)
}
}

export const getStatement = async (req, res) => {
    const allStatements = await StatementModel.find()
    res.json(allStatements);
}

export const patchStatement = async (req,res) => {
    const status = req.body.caseStatus;

    const updateStatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
    res.json(updateStatement);
}

export const getStatementById = async (req, res) => {
    const singleStatement = await StatementModel.findById(req.params.id)
    res.json(singleStatement);
}

export const deleteStatementById = async (req,res) => {
    const delStatement = await StatementModel.findByIdAndDelete(req.params.id);
    res.json(`Statement with id ${req.params.id} deleted`);
    
}