import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDoc } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDoc>,
  ) {}

  /**
   * Create a new person in the database.
   * @param createPerson - The data for creating the person.
   * @returns The created person.
   */
  async create(createPerson: CreatePersonDto) {
    const create = new this.personModel(createPerson);
    return await create.save();
  }

  /**
   * Retrieve all persons from the database.
   * @returns An array of persons.
   */
  async findAll() {
    const findPerson = await this.personModel.find();
    return findPerson;
  }

  /**
   * Find a person by their name in the database.
   * @param name - The name of the person to find.
   * @throws HttpException with a 404 status if the person is not found.
   * @returns The found person.
   */
  async findOne(name: string) {
    const findPerson = await this.personModel.findOne({ name: name });
    if (!findPerson) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return findPerson;
  }

  /**
   * Update a person's information in the database.
   * @param name - The name of the person to update.
   * @param updatePersonDto - The data for updating the person.
   * @throws HttpException with a 404 status if the person is not found.
   * @returns The updated person.
   */
  async update(name: string, updatePersonDto: UpdatePersonDto) {
    const findPerson = await this.findOne(name);
    if (!findPerson) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.personModel.findOneAndUpdate(
      { name: name },
      { ...updatePersonDto },
      { new: true },
    );
  }

  /**
   * Get a person by their name from the database.
   * @param name - The name of the person to get.
   * @throws HttpException with a 404 status if the person is not found.
   * @returns The found person.
   */
  async getPersonByName(name: string) {
    const person = await this.personModel.findOne({ name: name });
    if (!person) {
      throw new HttpException('name does not exist', HttpStatus.NOT_FOUND);
    }
    return person;
  }

  /**
   * Remove a person from the database by name.
   * @param name - The name of the person to remove.
   * @throws HttpException with a 404 status if the person is not found.
   * @returns The removed person.
   */

  async remove(name: string) {
    const findPerson = await this.findOne(name);
    if (!findPerson) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.personModel.findOneAndRemove({ name: name });
  }
}
