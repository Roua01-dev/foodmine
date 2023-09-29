import express, { Router } from "express";
import { sample_foods } from "../data";
import asynceHandler from 'express-async-handler';
import {Food, FoodModel } from "../models/food.model";
import { HTTP_BAD_REQUEST } from "../constante/http_status";
const router =Router();


// route GET '/seed' est utilisée pour
// déclencher la création 
//de données de test dans la base de données


router.get("/seed",asynceHandler(
    async(req,res)=>{
    const foodsCount=await FoodModel.countDocuments();
    if(foodsCount>0){ 
        res.send("Seed is already donne!");
        return;
    }
    await FoodModel.create(sample_foods);
    res.send("Seed Is Done !");
  }))

router.get("/",asynceHandler(async(req,res)=>{
    //  http://localhost:5000/api/foods 
    //tatla3 jomla heki
    const foods=await FoodModel.find();
       res.send(foods);
  }))
  //lazemna njibou api lkol l 3malnehom f frontend
  
  router.get("/search/:searchTerm",asynceHandler
  (async(req,res)=>{
    const searchRegex=new RegExp(req.params.searchTerm,'i');
    const foods =await FoodModel.find({name:{$regex:searchRegex}})
     
      res.send(foods);
  
  }))
  
  router.get('/tags', asynceHandler(async (req, res) => {
    const tags = await FoodModel.aggregate([
      { $unwind: '$tags' },
      {
        $group: {
          _id: { $toLower: '$tags' }, // Utilisation de $toLower pour normaliser la casse
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({ count: -1 });
  
    const all = {
      name: 'All',
      count: await FoodModel.countDocuments(),
    };
  
    tags.unshift(all);
  
    res.send(tags);
  }));
  
  router.get("/tag/:tagName",asynceHandler( 
    async(req,res)=>{
      const food=await FoodModel.find({tags:req.params.tagName})
      res.send(food);
  })
  )
  
 router.get("/:foodId",asynceHandler(async(req,res)=>{
    const food=await FoodModel.findById(req.params.foodId);
    res.send(food);
  }))


  router.post("/add-food",asynceHandler(
    async(req,res)=>{
      try {
    const {
      name,
      price,
      tags,
      favorite,
      stars,
      imageUrl,
      origins,
      cookTime,
                 } = req.body;
    const food = await FoodModel.findOne({name});
    if(food){
      res.status(HTTP_BAD_REQUEST)
      .send('food is already exist');

      return;
    }
    const newFood = new FoodModel({
      id:'',
      name,
      price,
      tags,
      favorite,
      stars,
      imageUrl,
      origins,
      cookTime,
    });
    await newFood.save();
    res.status(201).json({ message: 'Aliment ajouté avec succès', food: newFood });
      }
      catch (error) {
        res.status(HTTP_BAD_REQUEST)
        .send();
        }
 
}))
  export default router;