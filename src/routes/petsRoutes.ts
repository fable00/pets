import { Router } from "express";
import { createPet, deletePetById, listPets, updatePetById } from "../controllers/petsController";

export const petsRoutes = Router()
.post('/pets', createPet)
.get('/pets/:petId(\\d+)', listPets)
.put('/pets/:petId(\\d+)', updatePetById)
.delete('/pets/:petId(\\d+)', deletePetById)

