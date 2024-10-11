import { Request, Response } from "express";
import { PetService } from "../services/petServices";

const service = new PetService()

export const listPets = async (req: Request, res: Response) =>{
  const pet = await service.fetchPets()
  res.status(200).json(pet)
}

export const createPet = async (req: Request, res: Response) =>{
  const createdPet = await service.createPets(req.body)
  res.status(201).json(createdPet) 
}

export const getPetById = async (req: Request, res: Response) =>{
  const petId = parseInt(req.params.petId)
  const pet = service.getPets(petId)
  res.status(200).json(pet)
}
export const updatePetById = async (req: Request, res: Response) =>{
 const petId = parseInt(req.params.petId)
 await service.updatePets(petId, req.body)
 res.status(204).json()
}

export const deletePetById = async (req: Request, res: Response) =>{
  const petId = parseInt(req.params.petId)
  await service.deletePets(petId)
  res.status(204).json()
}