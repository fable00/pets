import { z } from "zod";
import { NotFoundError } from "../models/exceptions";
import { Pet } from "../models/pet";

const notFound = new NotFoundError("Pet not found");

export class PetService {
  petRequest = z.object({
    name: z.string().min(3).max(50),
    age: z.optional(z.number().int().min(0)),
    breed: z.optional(z.string().max(25)),
    color: z.optional(z.string().max(25)),
    gender: z.optional(z.string().max(25)),
  });

  async fetchPets(): Promise<Pet[]> {
    return await Pet.findAll();
  }

  async getPets(id: number): Promise<Pet | undefined> {
    const pet = await Pet.findByPk(id);
    if (pet === null) throw notFound;
    return pet;
  }

  async createPets(pet: Pet): Promise<Pet> {
    this.petRequest.parse(pet);
    const createdPet = await Pet.create({ ...pet });
    return createdPet;
  }

  async updatePets(id: number, pet: Pet): Promise<void> {
    this.petRequest.parse(pet);
    const dontExists = (await Pet.findByPk(id)) === null;
    if (dontExists) throw notFound;
    await Pet.update({ ...pet }, { where: { id } });
  }

  async deletePets(id: number): Promise<void> {
    const dontExists = (await Pet.findByPk(id)) === null;
    if (dontExists) throw notFound;
    await Pet.destroy({ where: { id } });
  }
}