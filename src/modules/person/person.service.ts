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

  async create(createPerson: CreatePersonDto) {
    const create = new this.personModel(createPerson);
    return await create.save();
  }

  async findAll() {
    const findPerson = await this.personModel.find();
    return findPerson;
  }

  async findOne(name: string) {
    const findPerson = await this.personModel.findOne({ name: name });
    if (!findPerson) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return findPerson;
  }

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

  async getPersonByName(name: string) {
    const person = await this.personModel.findOne({ name: name });
    if (!person) {
      throw new HttpException('name does not exist', HttpStatus.NOT_FOUND);
    }
    return person;
  }

  async remove(name: string) {
    const findPerson = await this.findOne(name);
    if (!findPerson) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.personModel.findOneAndRemove({ name: name });
  }
}
