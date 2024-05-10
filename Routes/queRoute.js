const express = require('express')
const app = express()
const router = express.Router()
const Que = require('../Models/que')

router.post("/add",async (req,res)=>{
    try{
        const result = await Que.insertMany(req.body)
        res.status(200).send(`${result.length} documents insterted successfully`)
    }catch(err)
    {
        res.status(500).send( `Internal server error`)
    }
})

router.get("/",async (req,res)=>{
    try{
        const questions = await Que.find()
        res.status(200).json(questions)
    }catch(err)
    {
        res.status(500).send( `Internal server error`)
    }
})

router.get("/easy",async (req,res)=>{
    try{
        const questions = await Que.find({level:"easy"})
        res.status(200).json(questions)
    }catch(err)
    {
        res.status(500).send( `Internal server error`)
    }
})

router.get("/medium",async (req,res)=>{
    try{
        const questions = await Que.find({level:"medium"})
        res.status(200).json(questions)
    }catch(err)
    {
        res.status(500).send( `Internal server error`)
    }
})

router.get("/hard",async (req,res)=>{
    try{
        const questions = await Que.find({level:"hard"})
        res.status(200).json(questions)
    }catch(err)
    {
        res.status(500).send( `Internal server error`)
    }
})
module.exports = router 