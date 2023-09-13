import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from '../person.controller';
import { PersonService } from '../person.service';
import { personStubs } from './stubs/person.stub';
import { Person } from '../entities/person.entity';
import { CreatePersonDto } from '../dto/create-person.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';

jest.mock('../person.service');

describe('PersonController', () => {
  let controller: PersonController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let personService: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    controller = module.get<PersonController>(PersonController);
    personService = module.get<PersonService>(PersonService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let person: Person;
    describe('when user is called', () => {
      beforeEach(async () => {
        person = await controller.findOne(personStubs().name);
      });

      test('then it should call user service', () => {
        expect(personService.findOne).toBeCalledWith(personStubs().name);
      });

      test('then it should return a person', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });

  describe('findAll', () => {
    let person: Person[];
    describe('get all users', () => {
      beforeEach(async () => {
        person = await controller.findAll();
      });
      test('then should be called', () => {
        expect(personService.findAll).toHaveBeenCalled();
      });
      test('then it should return', () => {
        expect(person).toEqual([personStubs()]);
      });
    });
  });

  describe('create', () => {
    describe('when create is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let person: Person;
      let createPerson: CreatePersonDto;

      beforeEach(async () => {
        createPerson = {
          name: personStubs.name,
        };
        person = await controller.create(createPerson);
      });

      test('then it should be called', () => {
        expect(personService.create).toHaveBeenCalled();
      });

      test('then should return', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });

  describe('update', () => {
    describe('when update is called', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let person: Person;
      let updatePerson: UpdatePersonDto;

      beforeEach(async () => {
        updatePerson = {
          name: 'john doe',
        };
        person = await controller.update(personStubs().name, updatePerson);
      });
      test('then it should be called', () => {
        expect(personService.update).toHaveBeenCalledWith(
          personStubs().name,
          updatePerson,
        );
      });
      test('then it should return', () => {
        expect(person).toEqual(personStubs());
      });
    });
  });

  describe('remove', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let person: Person;
    beforeEach(async () => {
      person = await controller.remove(personStubs().name);
    });

    test('then it should be called', () => {
      expect(personService.remove).toHaveBeenCalledWith(personStubs().name);
    });

    test('then it should return', () => {
      expect(person).toEqual(personStubs());
    });
  });

  describe('query', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let person: Person;
    beforeEach(async () => {
      person = await controller.queryName(personStubs().name);
    });

    test('then it should be called', () => {
      expect(personService.getPersonByName).toHaveBeenCalledWith(
        personStubs().name,
      );
    });

    test('then it should return', () => {
      expect(person).toEqual(personStubs());
    });
  });
});
