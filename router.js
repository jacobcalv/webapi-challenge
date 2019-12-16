const express = require('express');
const router = express.Router();
const projectModel = require('./data/helpers/projectModel')
const actionModel = require('./data/helpers/actionModel')

router.get('/', async (req, res) => {
    try{
        const projects = await projectModel.get()
        res.status(200).json({success: "true", projects})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/:id', validateProjectId, async (req, res) => {
    try{
        res.status(200).json(req.project)
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    const projectInfo = req.body;
    try{
        const newProject = await projectModel.insert(projectInfo)
        res.status(200).json({success: "true", projectInfo})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/', async (req, res) => {
    try{
        res.status(200).json({success: "true"})
    } catch (error) {
        res.status(500).json({error})
    }
})

//middleware

function validateProjectId(req, res, next) {
    const {id} = req.params;
    projectModel.get(id)
      .then(project => {
        if (project) {
          req.project = project
          console.log(req.project)
          next();
        } else {
          res.status(404).json({message: "Project not found in the system hmmm"})
        }
      })
      .catch( err => {
        res.status(500).json({err})
      })
  }

module.exports = router;