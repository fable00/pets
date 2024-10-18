import { Pet } from "../models/pet";


const notFound = new Error("Pet not found")

export class PetService {
  async fetchPets(): Promise<Pet[]> {
    return await Pet.findAll();
  }

  async getPets(id: number): Promise<Pet | undefined> {
    const foundPet = await Pet.findByPk(id)
    if (foundPet === null) throw notFound
    return foundPet;
  }
  async createPets(pet: Pet): Promise<Pet> {
    const createdPet = await Pet.create({... pet})
    return createdPet
  }
  async updatePets(id: number, pet: Pet): Promise<void> {
    const dontExists = (await Pet.findByPk(id) === null)
    if(dontExists) throw notFound
    await Pet.update({... pet}, {where: {id}})
  }

  async deletePets(id: number): Promise<void> {
    const dontExists = (await Pet.findByPk(id) === null)
    if(dontExists) throw notFound
    await Pet.destroy({where: {id}})  
  }
}