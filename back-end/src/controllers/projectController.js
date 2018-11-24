const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find();

        return res.send({projects});
    } catch(err) {
        return res.status(400).send({error: 'Error loading projects'});
    }
});

router.get('/:projectId', async (req, res) => {
    try{        
        const project = await Project.findById(req.params.projectId);        

        return res.send({project});
    } catch(err) {
        return res.status(400).send({error: 'Error loading project'});
    }
});

router.post('/', async (req, res) => {
    try{    
        const project = await Project.create(req.body);

        return res.send({project})
    } catch(err){
        return res.status(400).send({error: 'Error creating new project'});
    }
});

router.put('/:projectId', async (req, res) => {    
    try{
        const projectup = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId,
            {
                biografia: projectup.biografia,
                interesses: projectup.interesses,
                idiomas: projectup.idiomas,
                formacao: projectup.formacao,
                atividades: projectup.atividades,
                habilidades: projectup.habilidades,
                news: projectup.news,
                portifolio: projectup.portifolio
            },{new:true})
 
        await project.save()

        return res.send({project});

    }catch(err){
        return res.status(400).send({error: 'Erro ao carregar projeto'})
    }
});

router.delete('/:projectId', async (req, res) => {
    try{
        await Project.findByIdAndRemove(req.params.projectId);

        return res.send();
    } catch(err) {
        return res.status(400).send({error: 'Error deleting project'});
    }
});

module.exports = app => app.use('/projects', router);