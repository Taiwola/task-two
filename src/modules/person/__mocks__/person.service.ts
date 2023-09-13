import { personStubs } from '../test/stubs/person.stub';

export const PersonService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(personStubs()),
  findAll: jest.fn().mockResolvedValue([personStubs()]),
  create: jest.fn().mockResolvedValue(personStubs()),
  update: jest.fn().mockResolvedValue(personStubs()),
  getPersonByName: jest.fn().mockResolvedValue(personStubs()),
  remove: jest.fn().mockResolvedValue(personStubs()),
});
