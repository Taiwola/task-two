import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from '../person.service';
import { getModelToken } from '@nestjs/mongoose';
import { Person } from '../entities/person.entity';
import { PersonModel } from './support/person.model';
import { personStubs } from './stubs/person.stub';
import { FilterQuery } from 'mongoose';

describe('PersonService', () => {
  let service: PersonService;
  let personModel: PersonModel;
  let personFilterQuery: FilterQuery<Person>;

  // const mockPersonRepo = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonService,
        {
          provide: getModelToken(Person.name),
          useClass: PersonModel,
        },
      ],
    }).compile();

    service = module.get<PersonService>(PersonService);
    personModel = module.get<PersonModel>(getModelToken(Person.name));

    personFilterQuery = {
      name: personStubs().name,
    };

    jest.clearAllMocks();
  });

  describe('findOne', () => {
    describe('when findOne is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let person: Person;

      beforeEach(async () => {
        jest.spyOn(personModel, 'findOne');
        person = await service.findOne(personStubs().name);
      });
      test('then it should be called with personModel', () => {
        expect(personModel.findOne).toHaveBeenCalledWith(personStubs());
      });
      test('then it should return the personStubs', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });

  describe('find', () => {
    describe('when find is called', () => {
      let person: Person[];

      beforeEach(async () => {
        jest.spyOn(personModel, 'find');
        person = await service.findAll();
      });
      test('then it should be called with person model', () => {
        expect(personModel.find).toHaveBeenCalledWith();
      });
      test('then should return', () => {
        expect(person).toEqual([personStubs()]);
      });
    });
  });

  describe('findOneAndUpdate', () => {
    describe('when findOneAndUpdate is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let person: Person;
      beforeEach(async () => {
        jest.spyOn(personModel, 'findOneAndUpdate');
        person = await service.update(personStubs().name, personStubs());
      });
      test('then it should call the personModel', () => {
        expect(personModel.findOneAndUpdate).toHaveBeenCalledWith(
          personFilterQuery,
          personStubs(),
          { new: true },
        );
      });
      test('then it should return', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });

  describe('queryName', () => {
    describe('when queryName is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let person: Person;
      beforeEach(async () => {
        jest.spyOn(personModel, 'queryName');
        person = await service.getPersonByName(personStubs().name);
      });
      test('then should be called with personModel', () => {
        expect(personModel.queryName);
      });
      test('then should return', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });
});
