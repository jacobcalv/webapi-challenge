const express = require('express');
const router = express.Router();
const projectModel = require('./data/helpers/projectModel')
const actionModel = require('./data/helpers/actionModel')

router.get('/', async (req, res) => {
    try{
        const actions = await actionModel.get()
        res.status(200).json({success: "true", actions})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/:id', validateActionId, async (req, res) => {
    try{
        res.status(200).json(req.action)
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async (req, res) => {
    const actionInfo = req.body;
    try{
        const newAction = await actionModel.insert(actionInfo)
        res.status(200).json({success: "true", actionInfo})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.put('/edit/:id', validateActionId, async (req, res) => {
    const actionInfo = req.body;
    try{
        const actionChanges = await actionModel.update(req.action.id, actionInfo)
        res.status(200).json({success: "true", actionChanges})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.delete('/:id', validateActionId, async (req, res) => {
    try{
        const deletedAction = await actionModel.remove(req.action.id)
        res.status(200).json({success: "true", deletedAction})
    } catch (error) {
        res.status(500).json({error})
    }
})

function validateActionId(req, res, next) {
    const {id} = req.params;
    actionModel.get(id)
      .then(action => {
        if (action) {
          req.action = action
          console.log(req.action)
          next();
        } else {
          res.status(404).json({message: "Action not found in the system hmmm"})
        }
      })
      .catch( err => {
        res.status(500).json({err})
      })
  }

module.exports = router;